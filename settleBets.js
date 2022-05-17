const {LIQUIDITY_ABI, LIQUIDITY_ADDY, BET_ABI, BET_ADDY, MARKET_ABI, MARKET_ADDY, DAI_ABI, DAI_ADDY} = require("./src/config")
const Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
let private = "9a3609a0d72d681eb901bc822724593ad63d3feb32cc9e92c4b801750964a1ad";

const getMatches = async () => {

    // let web3  = store.getState().user.web3;
    // if (web3 == null)
    web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

    
    let contract = new web3.eth.Contract(MARKET_ABI, MARKET_ADDY);
    let account = await web3.eth.getAccounts()
    let userAddress = account[0];
    
    let matches = await contract.methods.getAllMarkets().call()
    let all_matches = []

    for (const match of matches) {
        let match_detail = await contract.methods.marketDetailsById(match).call()
        all_matches.push(match_detail)
    }

    console.log(all_matches)

    return [all_matches, matches]
}

const account = web3.eth.accounts.privateKeyToAccount('0x' + private);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;


async function settle(){
    let market = new web3.eth.Contract(MARKET_ABI, MARKET_ADDY);
    await market.methods.settleMarkets([2, 3, 5, 8, 11], [1, 0, 1, 0, 2]).send({from: account.address, gas: 500000})
}

settle()