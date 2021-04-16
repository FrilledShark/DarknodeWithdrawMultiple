import os
import json
from datetime import datetime
import asyncio
from web3 import Web3


infura = "https://mainnet.infura.io/v3/4e3b160a19f845858bd42d301f00222e"

web3 = Web3(Web3.HTTPProvider(infura))
print(web3.isConnected())


tx = "0x2d91b59f7afc352e027fecea78935992979a46dce12efd2fe2607a9a4bd6f43c"

# Check if transaction is pending
# if transaction is pending:
#   tx = web3.eth.getTransaction(tx)
#   tx["input"] to hex
#   Find Bitcoin address in input. Note, this is unreliable, since we can't know for sure that they didn't put another address into this.
# else:
data = web3.eth.getTransactionReceipt(tx)
# print(data["logs"])
for event in data["logs"]:
    if web3.toHex(event["topics"][0]) == "0x1619fc95050ffb8c94c9077c82b3e1ebbf8d571b6234241c55ba0aaf40da019e":
        address = ""
        for block_index in range(int((len(event["data"])-2)/64)+1):
            if block_index not in [4,5]:
                continue
            block = event["data"][2:][64*(block_index-1):64*block_index]
            # print(block)
            address += web3.toText(hexstr=block)
        print(address)