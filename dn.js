async function sortAllDarknodes(allDarknodes, selectedAccount) {
    let specificFee = 0;
    app.privateDarknodes = [];
    app.fees = 0;
    for (Darknode in allDarknodes) {
        operator = await app.DarknodeRegistry.methods.getDarknodeOperator(allDarknodes[Darknode]).call();
        if (app.operatorInformation[operator]) {
            app.operatorInformation[operator].push(allDarknodes[Darknode])
        } else {
            app.operatorInformation[operator] = [allDarknodes[Darknode]]
        }
        if (!app.operators.includes(operator)){
            app.operators = [operator].concat(app.operators);
        }
        app.indexSearched = Darknode;
        if (operator == selectedAccount) {
            app.privateDarknodes.push(allDarknodes[Darknode]);
            specificFee = Number(await app.DarknodePayment.methods.darknodeBalances(allDarknodes[Darknode], app.renBTC).call());
            app.fees += specificFee;
            app.darknodesInformation[allDarknodes[Darknode]] = {operator:operator, fee:specificFee};
        } else {
            app.darknodesInformation[allDarknodes[Darknode]] = {operator:operator};
        }
    }
    app.loadingDarknodes = false;
}


let app = new Vue({
    el: '#app',
    data: {
        operators: [],
        darknodesInformation: {},
        operatorInformation: {},
        indexSearched: 0,
        selectedAccount: "",
        fees: 0,
        pendingRewardPool: 0,
        web3: "",
        DarknodeRegistry: "",
        DarknodePayment: "",
        allDarknodes: "",
        privateDarknodes: "",
        loadingDarknodes: "",
        renBTC: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
    },
    methods: {
        setDarknodes: function (value) {
            this.allDarknodes = value;
        },
        setProvider: function() {
            let ethereum = window.ethereum;
            ethereum.enable().then(function(x) {app.setupWeb3()});
        },
        setupWeb3: function () {
            let ethereum = window.ethereum;
            this.web3 = new Web3(ethereum);
            this.web3.eth.getAccounts().then(
                (accounts) => app.selectedAccount = accounts[0]
            ); 
            this.DarknodeRegistry = new this.web3.eth.Contract(DarknodeRegistryProxyABI, "0x2d7b6c95afeffa50c068d50f89c5c0014e054f0a");
            this.DarknodePayment = new this.web3.eth.Contract(DarknodePaymentABI, "0x098e1708b920EFBdD7afe33Adb6a4CBa30c370B9");
        },
        getAllDarknodes: function() {
            this.DarknodeRegistry.methods.getDarknodes("0xb271f0e9dc077905232139c2ce1583dabbe6eb9e", 0).call().then(function (value) {app.allDarknodes = value;});
        },
        writeFeeWithdrawal: function() {
            this.DarknodePayment.methods.withdrawMultiple(this.privateDarknodes, [this.renBTC]).send({from: this.selectedAccount});
        },
        getPendingFees: function() {
            this.DarknodePayment.methods.currentCycleRewardPool(this.renBTC).call().then(function (value) {
                app.pendingRewardPool = value
            });
        },
        roundValue: function (val) {
            return val.toFixed(6);
        },
        getSearchPercentage: function () {
            return (this.indexSearched/this.allDarknodes.length * 100).toFixed(2);
        },
        sortOperators: function() {
            this.operators.sort(function(a,b) {
                this.operatorInformation[a].length < this.operatorInformation[b].length;
            });
        }
    },
    watch: {
        web3: function (val, oldval) {
            this.getAllDarknodes();
        },
        allDarknodes: function (val, oldval) {
            this.loadingDarknodes = true;
            sortAllDarknodes(this.allDarknodes, this.selectedAccount).then((result) => {
                app.loadingDarknodes = false;
            });
            this.getPendingFees();
        },
        loadingDarknodes: function(val,oldval) {
            if (val) {
                console.log("We are currently loading darknodes. Please wait");
            } else {
                console.log("Darknodes have finished loading.");
            }
        }
    },
    // created() {}
});