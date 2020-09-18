DarknodeRegistryProxyABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_darknodeOperator","type":"address"},{"indexed":true,"internalType":"address","name":"_darknodeID","type":"address"}],"name":"LogDarknodeDeregistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IDarknodePayment","name":"_previousDarknodePayment","type":"address"},{"indexed":true,"internalType":"contract IDarknodePayment","name":"_nextDarknodePayment","type":"address"}],"name":"LogDarknodePaymentUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_darknodeOperator","type":"address"},{"indexed":true,"internalType":"address","name":"_darknodeID","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"LogDarknodeRefunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_darknodeOperator","type":"address"},{"indexed":true,"internalType":"address","name":"_darknodeID","type":"address"},{"indexed":false,"internalType":"uint256","name":"_bond","type":"uint256"}],"name":"LogDarknodeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_darknodeOperator","type":"address"},{"indexed":true,"internalType":"address","name":"_darknodeID","type":"address"},{"indexed":true,"internalType":"address","name":"_challenger","type":"address"},{"indexed":false,"internalType":"uint256","name":"_percentage","type":"uint256"}],"name":"LogDarknodeSlashed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_previousMinimumBond","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nextMinimumBond","type":"uint256"}],"name":"LogMinimumBondUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_previousMinimumEpochInterval","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nextMinimumEpochInterval","type":"uint256"}],"name":"LogMinimumEpochIntervalUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_previousMinimumPodSize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nextMinimumPodSize","type":"uint256"}],"name":"LogMinimumPodSizeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epochhash","type":"uint256"}],"name":"LogNewEpoch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_previousSlasher","type":"address"},{"indexed":true,"internalType":"address","name":"_nextSlasher","type":"address"}],"name":"LogSlasherUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"blacklistRecoverableToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimStoreOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"epochhash","type":"uint256"},{"internalType":"uint256","name":"blocktime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"darknodePayment","outputs":[{"internalType":"contract IDarknodePayment","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"deregister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deregistrationInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"epoch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"getDarknodeBond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"getDarknodeOperator","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"getDarknodePublicKey","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_start","type":"address"},{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"getDarknodes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_start","type":"address"},{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"getPreviousDarknodes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_VERSION","type":"string"},{"internalType":"contract RenToken","name":"_renAddress","type":"address"},{"internalType":"contract DarknodeRegistryStore","name":"_storeAddress","type":"address"},{"internalType":"uint256","name":"_minimumBond","type":"uint256"},{"internalType":"uint256","name":"_minimumPodSize","type":"uint256"},{"internalType":"uint256","name":"_minimumEpochIntervalSeconds","type":"uint256"},{"internalType":"uint256","name":"_deregistrationIntervalSeconds","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_nextOwner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isDeregisterable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isDeregistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isPendingDeregistration","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isPendingRegistration","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isRefundable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isRefunded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"isRegisteredInPreviousEpoch","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumBond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumEpochInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumPodSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextMinimumBond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextMinimumEpochInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextMinimumPodSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextSlasher","outputs":[{"internalType":"contract IDarknodeSlasher","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numDarknodes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numDarknodesNextEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numDarknodesPreviousEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousEpoch","outputs":[{"internalType":"uint256","name":"epochhash","type":"uint256"},{"internalType":"uint256","name":"blocktime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"recoverTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"}],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"},{"internalType":"bytes","name":"_publicKey","type":"bytes"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ren","outputs":[{"internalType":"contract RenToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_guilty","type":"address"},{"internalType":"address","name":"_challenger","type":"address"},{"internalType":"uint256","name":"_percentage","type":"uint256"}],"name":"slash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"slasher","outputs":[{"internalType":"contract IDarknodeSlasher","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"store","outputs":[{"internalType":"contract DarknodeRegistryStore","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract DarknodeRegistryLogicV1","name":"_newOwner","type":"address"}],"name":"transferStoreOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IDarknodePayment","name":"_darknodePayment","type":"address"}],"name":"updateDarknodePayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_nextMinimumBond","type":"uint256"}],"name":"updateMinimumBond","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_nextMinimumEpochInterval","type":"uint256"}],"name":"updateMinimumEpochInterval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_nextMinimumPodSize","type":"uint256"}],"name":"updateMinimumPodSize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IDarknodeSlasher","name":"_slasher","type":"address"}],"name":"updateSlasher","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

DarknodePaymenyABI = [{"inputs":[{"internalType":"string","name":"_VERSION","type":"string"},{"internalType":"contract DarknodeRegistryLogicV1","name":"_darknodeRegistry","type":"address"},{"internalType":"contract DarknodePaymentStore","name":"_darknodePaymentStore","type":"address"},{"internalType":"uint256","name":"_cyclePayoutPercent","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_newCycleChanger","type":"address"},{"indexed":true,"internalType":"address","name":"_oldCycleChanger","type":"address"}],"name":"LogCycleChangerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_darknode","type":"address"},{"indexed":false,"internalType":"uint256","name":"_cycle","type":"uint256"}],"name":"LogDarknodeClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract DarknodeRegistryLogicV1","name":"_previousDarknodeRegistry","type":"address"},{"indexed":true,"internalType":"contract DarknodeRegistryLogicV1","name":"_nextDarknodeRegistry","type":"address"}],"name":"LogDarknodeRegistryUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_darknodeOperator","type":"address"},{"indexed":true,"internalType":"address","name":"_darknodeID","type":"address"},{"indexed":true,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"LogDarknodeWithdrew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_payer","type":"address"},{"indexed":true,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"LogPaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_newPercent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_oldPercent","type":"uint256"}],"name":"LogPayoutPercentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_token","type":"address"}],"name":"LogTokenDeregistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_token","type":"address"}],"name":"LogTokenRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"ETHEREUM","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"changeCycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_darknode","type":"address"}],"name":"claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimStoreOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentCycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentCyclePayoutPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"currentCycleRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cycleChanger","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cycleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_darknodeID","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"darknodeBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"darknodeRegistry","outputs":[{"internalType":"contract DarknodeRegistryLogicV1","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"deregisterToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"forward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_nextOwner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextCyclePayoutPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pendingTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousCycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"previousCycleRewardShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"registerToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredTokenIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"registeredTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"store","outputs":[{"internalType":"contract DarknodePaymentStore","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"tokenPendingRegistration","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract DarknodePayment","name":"_newOwner","type":"address"}],"name":"transferStoreOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unclaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"updateCycleChanger","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract DarknodeRegistryLogicV1","name":"_darknodeRegistry","type":"address"}],"name":"updateDarknodeRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"updatePayoutPercentage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_darknode","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_darknodes","type":"address[]"},{"internalType":"address[]","name":"_tokens","type":"address[]"}],"name":"withdrawMultiple","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]


const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;

function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
  
    // Check that the web page is run in a secure context,
    // as otherwise MetaMask won't be available
    // if(location.protocol !== 'https:') {
    //   // https://ethereum.stackexchange.com/a/62217/620
    //   const alert = document.querySelector("#alert-error-https");
    //   alert.style.display = "block";
    //   document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    //   return;
    // }
  
    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
    };
  
    web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
  
    console.log("Web3Modal instance is", web3Modal);
}


async function onDisconnect() {

    console.log("Killing the wallet connection", provider);
  
    // TODO: Which providers have close method?
    if(provider.close) {
      await provider.close();
  
      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavir.
      await web3Modal.clearCachedProvider();
      provider = null;
    }
  
    selectedAccount = null;
  
    // Set the UI back to the initial state
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
}

  async function onConnect() {

    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
  
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      fetchAccountData();
    });
  
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      fetchAccountData();
    });
  
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      fetchAccountData();
    });
  
    await refreshAccountData();
}


web3 = new Web3(provider);

let allDarknodes;
let privateDarknodes;


let DarknodeRegistry = new window.web3.eth.Contract(DarknodeRegistryProxyABI, "0x2d7b6c95afeffa50c068d50f89c5c0014e054f0a")

let DarknodePayment = new window.web3.eth.Contract(DarknodePaymentABI, "0x098e1708b920EFBdD7afe33Adb6a4CBa30c370B9")

async function getAllDarknodes() {
    await DarknodeRegistry.methods.getDarknodes("0xe9578275A14f61f7cAF35e47ca358C7Ac89B254E", 0).call().then(function (value) {allDarknodes = value;});
}

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



async function updateDarknodes() {
    await getAllDarknodes();
    await sortAllDarknodes();
    document.getElementById("Darknodes").innerText = privateDarknodes
}
  
function writeFeeWithdrawal() {
    renBTC = "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d"
    DarknodePayment.methods.withdrawMultiple(privateDarknodes, [renBTC]).send();
}




window.addEventListener('load', async () => {
    init();
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  });
