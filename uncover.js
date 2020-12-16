



let app = new Vue({
    el: '#app',
    data: {
        web3: "",
        transaction: "",
        addresses: "",
    },
    methods: {
        setupWeb3: function() {
            // let ethereum = window.ethereum;
            const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4e3b160a19f845858bd42d301f00222e');
            this.web3 = new Web3(provider);
            // this.web3.eth.getAccounts().then(
            //     (accounts) => app.selectedAccount = accounts[0]
            // ); 
        },
        evalveTx: function(tx_data) {
            // app.web3.eth.getTransaction('tx_hash', (err,x) => tx_data = x)
            let addresses = [];
            for (let event of tx_data.logs) {
                if (this.web3.utils.bytesToHex(event.topics[0]) == "0x1619fc95050ffb8c94c9077c82b3e1ebbf8d571b6234241c55ba0aaf40da019e") {
                    let addr = this.web3.utils.hexToUtf8("0x" + event.data.substring(64*3+2, 64*4+2));
                    addr = addr + this.web3.utils.hexToUtf8("0x" + event.data.substring(64*4+2, 64*5+2));
                    addresses.push(addr);
                }
            }
            return addresses;
        }, 
        getTx: function() {
            this.web3.eth.getTransactionReceipt(this.transaction, (err, x) => this.addresses = this.evalveTx(x))
        }
    },
    created: function() {
        setTimeout(() => app.setupWeb3(), 200);
    }
});



// data = web3.eth.getTransactionReceipt(tx)
// # print(data["logs"])
// for event in data["logs"]:
//     if web3.toHex(event["topics"][0]) == "0x1619fc95050ffb8c94c9077c82b3e1ebbf8d571b6234241c55ba0aaf40da019e":
//         address = ""
//         for block_index in range(int((len(event["data"])-2)/64)+1):
//             if block_index not in [4,5]:
//                 continue
//             block = event["data"][2:][64*(block_index-1):64*block_index]
//             # print(block)
//             address += web3.toText(hexstr=block)
//         print(address)