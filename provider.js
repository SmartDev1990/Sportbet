const {LIQUIDITY_ABI, LIQUIDITY_ADDY, BET_ABI, BET_ADDY, MARKET_ABI, MARKET_ADDY, DAI_ABI, DAI_ADDY} = require("./src/config")
const Web3 = require('web3');
const {MaxUint256} = require("@ethersproject/constants");

let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
let private = "9a3609a0d72d681eb901bc822724593ad63d3feb32cc9e92c4b801750964a1ad";

const account = web3.eth.accounts.privateKeyToAccount('0x' + private);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }

async function perform(){
       
    let token_contract = new web3.eth.Contract(DAI_ABI, DAI_ADDY);
    await token_contract.methods.approve(LIQUIDITY_ADDY, MaxUint256).send({from: account.address, gas: 122000})


    let market = new web3.eth.Contract(MARKET_ABI, MARKET_ADDY);

    let data = require('./odds.json');

        for (sport in data){
            for (league in data[sport]){
                for (var match of data[sport][league]){
                    let new_outcome = new Map()
                    let curr_odds = Object.values(match['outcomes'])
                    let outcome = Object.keys(match['outcomes'])

                    // if (match['outcomes']["X"] !== undefined){
                    //     outcome = ['1', 'X', '2']
                    //     curr_odds = [ match['outcomes']['1'], match['outcomes']['X'], match['outcomes']['2']]
                    // }

                    let new_odds = []

                    for (var odd of curr_odds)
                        new_odds.push(parseInt(odd * 1000))
                    

                    await market.methods.startMarket(toTimestamp(match['timestamp']), match['match'], [sport, league], outcome, new_odds).send({from: account.address, gas: 500000})
                }
            }
        }
}


async function getMatches(){
    let contract = new web3.eth.Contract(MARKET_ABI, MARKET_ADDY);

    let matches = await contract.methods.getAllMarkets().call()
    console.log(matches)
    let all_matches = []

    for (const match of matches) {
        let match_detail = await contract.methods.marketDetailsById(match).call()
        all_matches.push(match_detail)
    }
}

async function updateOdds(){
    (async function my_func() {
        let market = new web3.eth.Contract(MARKET_ABI, MARKET_ADDY);    

        let details = [{'id': 2, odds: [1150, 5630]}, {'id': 2, odds: [1170, 5630]}, 
                        {'id': 3, odds: [4010, 1270]}, {'id': 3, odds: [4030, 1270]}, 
                        {'id': 4, odds: [4020, 1270]}, {'id': 4, odds: [5080, 1100]}, 
                        {'id': 12, odds: [3450, 1350]}, {'id': 12, odds: [2720, 2310]},
                        {'id': 13, odds: [1330, 3710]}, {'id': 13, odds: [1530, 2470]},
                        {'id': 14, odds: [2480, 1580]}, {'id': 14, odds: [2990, 1430]},
                        {'id': 17, odds: [2980, 1430]}, {'id': 17, odds: [2720, 2310]},
                        {'id': 18, odds: [3790, 1300]}, {'id': 18, odds: [1530, 2470]},
                        {'id': 19, odds: [1800, 2000]}, {'id': 19, odds: [2990, 1430]},
                    ]
        
        const randomElement = details[Math.floor(Math.random() * details.length)];
        await market.methods.updateOdds(randomElement['id'], randomElement['odds']).send({from: account.address, gas: 500000})
        setTimeout( my_func, 10000 );
    })();
}

async function main(){
    await perform()
    await getMatches()
    await updateOdds()
}

main()
