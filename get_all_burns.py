import os
import json
from datetime import datetime
import asyncio
from web3 import Web3
import pandas as pd


infura = "https://mainnet.infura.io/v3/4e3b160a19f845858bd42d301f00222e"

web3 = Web3(Web3.HTTPProvider(infura))
print(web3.isConnected())

dirname = os.path.dirname(__file__)


with open(os.path.join(dirname, "abi.json"), "r") as f:
    abi = json.load(f)

#topic[0] = 0xa58ba939eb08dab7eaf8ad09c16e7405ee88e5153e15da62d5481296a9f727fa

BTCGATEWAY = web3.eth.contract(address="0xe4b679400F0f267212D5D812B95f58C83243EE71", abi=abi["BTCGATEWAY"])

# BTCGATEWAY.getPastEvents("allEvents", dict(
#     fromBlock=11471170,
#     toBlock="latest"
# ))

def split_data(data):
    blocks = []
    for block_index in range(int((len(data)-2)/64)+1):
        blocks.append(data[2:][64*(block_index-1):64*block_index])
    return blocks[1:]




df = pd.DataFrame(columns=["Transaction", "AddressEth", "AddressBTC", "Amount"])

fromBlock=9737055
latest = web3.eth.getBlock('latest')["number"]
q = 0
a3 = 0
a1 = 0
bc1 = 0
for i in range(9737055, latest, 5000):
    start = i
    if start + 5000 > latest:
        end = latest
    else:
        end = start + 5000
    if q % 5 == 0:
        print((end-fromBlock)/(latest-fromBlock)*100)
        break
    q += 1
    
    logs = web3.eth.getLogs(dict(fromBlock=start, toBlock=end, address="0xe4b679400F0f267212D5D812B95f58C83243EE71", topics=["0x1619fc95050ffb8c94c9077c82b3e1ebbf8d571b6234241c55ba0aaf40da019e"]))
    for log in logs:
        data = split_data(log["data"])
        tx = web3.toHex(log["transactionHash"])
        amount = web3.toInt(hexstr=data[1])/10**8
        addressBTC = web3.toText(hexstr=data[4]) + web3.toText(hexstr=data[5])
        if addressBTC[0] == str(1): a1 += 1
        elif addressBTC[0] == str(3): a3 += 1
        elif addressBTC[0] == "b": bc1 += 1
        
        transaction = web3.eth.getTransaction(tx)
        addressETH = transaction["from"]
        
        
        df = df.append(dict(Transaction=tx, AddressETH=addressETH, AddressBTC=addressBTC, Amount=amount), ignore_index=True)


print(a1, a3, bc1)
df.to_csv("addresses_burn.csv", index=False)