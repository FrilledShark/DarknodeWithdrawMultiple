import os
import json
from datetime import datetime
import asyncio
import pandas as pd
import random


df = pd.read_csv("addresses.csv")


df["Transaction"] = 0

df.to_csv("small_addresses.csv", index=False)