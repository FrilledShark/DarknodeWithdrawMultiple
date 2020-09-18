async function sortAllDarknodes() {
    privateDarknodes = [];
    for (Darknode in allDarknodes) {
        hits = [];
        operator = await DarknodeRegistry.methods.getDarknodeOperator(allDarknodes[Darknode]).call();
        if (operator == selectedAccount) {
            privateDarknodes.push(allDarknodes[Darknode]);
        }
    }
    return privateDarknodes;
}


let app = new Vue({
    el: '#app',
    data: {
        selectedAccount: "",
        web3: "",
        DarknodeRegistry: "",
        DarknodePayment: "",
        allDarknodes: "",
        privateDarknodes: "",
    },
    methods: {
        setDarknodes: function (value) {
            this.allDarknodes = value;
        },
        setProvider: function() {
            let ethereum = window.ethereum;
            ethereum.enable().then(this.setupWeb3());
        },
        setupWeb3: function () {
            let ethereum = window.ethereum;
            this.web3 = new Web3(ethereum);
        },
        getAllDarknodes: function() {
            this.DarknodeRegistry.methods.getDarknodes("0xe9578275A14f61f7cAF35e47ca358C7Ac89B254E", 0).call().then(function (value) {app.allDarknodes = value;});
        },
        sortAllDarknodes: function() {
            this.privateDarknodes = [];
            for (Darknode in this.allDarknodes) {
                hits = [];DarknodeRegistry.methods.getDarknodeOperator(this.allDarknodes[Darknode]).call().then(function(operator) {
                    if (operator == app.selectedAccount) {
                        app.privateDarknodes.push(app.allDarknodes[Darknode]);
                    }
                });
                
            }
            return privateDarknodes;
        }
    },
    watch: {
        web3: function (val, oldval) {
            this.selectedAccount = web3.eth.accounts[0]; 
            this.DarknodeRegistry = new this.web3.eth.Contract(DarknodeRegistryProxyABI, "0x2d7b6c95afeffa50c068d50f89c5c0014e054f0a");
            this.DarknodePayment = new this.web3.eth.Contract(DarknodePaymentABI, "0x098e1708b920EFBdD7afe33Adb6a4CBa30c370B9");
        }
    },
    created() {}
});