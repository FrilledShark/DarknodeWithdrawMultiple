import os
import json
from datetime import datetime
from web3 import Web3
import pandas as pd
import logging
from time import time

formatter = "%(asctime)s : %(levelname)s : %(message)s"
logging.basicConfig(
    format=formatter,
    level=logging.INFO,
    # handlers=[
    #     logging.FileHandler(logfile)
    # ]
)
logger = logging.getLogger(__name__)
USETEMPBACKUP = True

infura = "https://mainnet.infura.io/v3/4e3b160a19f845858bd42d301f00222e"

web3 = Web3(Web3.HTTPProvider(infura))
print(web3.isConnected())

dirname = os.path.dirname(__file__)

# # Gettings Abis.
# with open(os.path.join(dirname, "abi.json"), "r") as f:
#     bancor = json.load(f)


# topic[0] = 0x7c56cb7f63b6922d24414bf7c2b2c40c7ea1ea637c3f400efa766a85ecf2f093


def split_data(data):
    blocks = []
    for block_index in range(int((len(data) - 2) / 64) + 1):
        blocks.append(data[2:][64 * (block_index - 1) : 64 * block_index])
    return blocks[1:]


# We really don't want to start at square one every time, so we need to customise the fromBlock.
try:
    if USETEMPBACKUP:
        df = pd.read_csv(
            os.path.join(dirname,"darknodesReg.temp.csv"),
            dtype={
                "block": int,
                "transaction": str,
                "owner": str,
                "darknode": float,
            },
        )
    fromBlock = df.iloc[-1]["Block"] + 1
    logger.info(f"We already have {len(df)} darknodes, awesome!")
except Exception as E:
    print(E)
    df = pd.DataFrame(
        columns=[
            "block",
            "transaction",
            "owner",
            "darknode",
        ]
    )
    fromBlock = 9736758
latest = web3.eth.getBlock("latest")["number"]
t = [time()]
its = 10000
for i in range(fromBlock, latest, its):
    start = i
    if start + its > latest:
        end = latest
    else:
        end = start + its

    logs = web3.eth.getLogs(
        dict(
            fromBlock=start,
            toBlock=end,
            address=Web3.toChecksumAddress("0x2d7b6c95afeffa50c068d50f89c5c0014e054f0a"),
            topics=[
                "0x7c56cb7f63b6922d24414bf7c2b2c40c7ea1ea637c3f400efa766a85ecf2f093"
            ],
        )
    )
    t = [t[-1], time()]
    logger.info(f"{round((end - fromBlock) / (latest - fromBlock) * 100)}%, {len(logs)} events to fetch, Est. time {int(((latest - fromBlock) / its) * (1 - (end - fromBlock) / (latest - fromBlock))*(t[1]-t[0]))}") 
    for log in logs:
        data = split_data(log["data"])
        tx = web3.toHex(log["transactionHash"])
        block = log["blockNumber"]
        
        owner = Web3.toChecksumAddress(
            "0x" + web3.toHex(primitive=log["topics"][1])[26:]
        )
        darknode = Web3.toChecksumAddress(
            "0x" + web3.toHex(primitive=log["topics"][2])[26:]
        )

        df = df.append(
            dict(
                block=block,
                transaction=tx,
                owner=owner,
                darknode=darknode
            ),
            ignore_index=True,
        )
    df.to_csv(os.path.join(dirname, "darknodesReg.temp.csv"), index=False)

df.to_csv(os.path.join(dirname, "darknodesReg.csv"), index=False)
# os.remove(os.path.join(dirname, "/data/1inch_trades.temp.csv"))