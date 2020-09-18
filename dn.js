let app = new Vue({
    el: '#app',
    data: {
        selectedAccount: "",
        web3: "",
    },
    methods: {
        setProvider: function() {
            let ethereum = window.ethereum;
            ethereum.enable().then(this.setupWeb3());
        },
        setupWeb3: function () {
            let ethereum = window.ethereum;
            this.web3 = new Web3(ethereum);
        }
    },
    watch: {
        web3: function (val, oldval) {
            this.selectedAccount = web3.eth.accounts[0]; 
        }
    },
    created() {}
});