let app = new Vue({
    el: '#app',
    data: {
        selectedAccount: "",
        web3: "",
    },
    methods: {
        setUpWeb3: function() {
            let ethereum = window.ethereum;
            let web3 = window.web3;
            if (typeof ethereum !== 'undefined') {
            await ethereum.enable();
            this.web3 = new Web3(ethereum);
            } else if (typeof web3 !== 'undefined') {
            this.web3 = new Web3(web3.currentProvider);
            } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
            }
        }
    },
    watch: {
        web3: function (val, oldval) {
            this.selectedAccount = web3.eth.accounts[0]; 
        }
    },
    created() {}
});