const { expect } = require("chai");
const { ethers } = require("hardhat");
const { DAI_ADDY, WHALE_ADDY, erc20ABI } = require("./test_config")
const hre = require("hardhat");

let daiContract = new ethers.Contract(DAI_ADDY,erc20ABI);

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }

describe('Contract tests', () => {
    const FUND_AMOUNT = (BigInt(30000)*BigInt(10**18)).toString()
    let owner;
    let liq;
    let bet;
    let market;

    let DAI;
    let USER_DAI;

    before('Deploy Contract and Transfer Tokens', async () => {

        await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [WHALE_ADDY],
          });

        //get signer
        [owner] = await ethers.getSigners();

        //Deploy the contracts
        const Liquidity = await ethers.getContractFactory("Liquidity");
        liq = await Liquidity.deploy(DAI_ADDY);
        await liq.deployed();  

        const Market = await ethers.getContractFactory("Markets");
        market = await Market.deploy(1, 2);
        await market.deployed();  

        const Bet = await ethers.getContractFactory("Bet");
        bet = await Bet.deploy(DAI_ADDY, market.address, liq.address, 10);
        await bet.deployed();  

        await liq.setBetContract(bet.address);
        await market.setBetContract(bet.address);


        console.log("Liquidity Contract Deployed at " + liq.address);
        console.log("Bet Contract Deployed at " + bet.address);
        console.log("Market Contract Deployed at " + market.address);


        //Transfer from a whale to our account to run tests
        const whale_signer = await ethers.provider.getSigner(WHALE_ADDY);


        DAI = await ethers.getContractAt(erc20ABI, DAI_ADDY, whale_signer);
        USER_DAI = await ethers.getContractAt(erc20ABI, DAI_ADDY, owner);

        await DAI.transfer(owner.address, FUND_AMOUNT, {
            from: WHALE_ADDY,
            });

        
        await whale_signer.sendTransaction({
            to: owner.address,
            value: ethers.utils.parseEther("1")
        });

        for (let addy of ['0xDF2f2cda0110fB8424EAc1239AfA00Ab9976c9d9', '0x99c6fD3bC02dEB420F192eFb3ED0D6f479856D4B', '0xFf83517542B4587AAC87DEa0976675569dE0dc8D', '0x5664198BDb6AB7337b70742ff4BDD935f81e4Dcd', '0x91b098c80f0FD05464915A41253AB816804Cd5E8', '0x4cdC8c8bf707748b617deB9e5bcBF8c00C7F289B']) {

            await DAI.transfer(addy, FUND_AMOUNT, {
                from: WHALE_ADDY,
            });


            await whale_signer.sendTransaction({
                to: addy,
                value: ethers.utils.parseEther("1")
            });
        }


    })


    it("Add Liquidity", async function () {
        amt = 10
        await USER_DAI.approve(liq.address, amt);
        await liq.addLiquidity(amt);

        expect(await liq.balanceOf(owner.address, 0)).to.equal(amt);
        expect(await DAI.balanceOf(liq.address)).to.equal(amt);
    })

    it("Create Match at a time", async function () {
        let data = require('../odds.json');

        for (sport in data){
            for (league in data[sport]){
                for (var match of data[sport][league]){
                    curr_odds = Object.values(match['outcomes'])

                    let new_odds = []

                    for (var odd of curr_odds)
                        new_odds.push(parseInt(odd * 1000))
                    
                    // await market.startMarket(toTimestamp(match['timestamp']), match['match'], [sport, league], Object.keys(match['outcomes']), new_odds)
                }
            }
        }
    })

    it("Create Matches", async function () {
        let data = require('../odds.json');
        var matchTimestamp = []
        var names = []
        var match_details = []
        var bets = []
        var odds = []

        for (sport in data){
            for (league in data[sport]){
                for (var match of data[sport][league]){
                    matchTimestamp.push(toTimestamp(match['timestamp']))
                    names.push(match['match'])
                    match_details.push([sport, league])
                    bets.push(Object.keys(match['outcomes']))
                    
                    curr_odds = Object.values(match['outcomes'])

                    let new_odds = []

                    for (var odd of curr_odds)
                        new_odds.push(parseInt(odd * 1000))
                    
                    odds.push(new_odds)
                }
            }
        }

        // await market.startMarkets(matchTimestamp, names, match_details, bets, odds)

        //10^-9 * 4493659 * 55 * 2 = 0.5$ for polygon

    })

    it("Make all bets", async function () {
        total = 30

        // await USER_DAI.approve(bet.address, amt);
        // let bet_id = await bet.createBets([22], [1], [amt]);
        // expect(await bet.balanceOf(owner.address, 2)).to.equal(1);
    })
})