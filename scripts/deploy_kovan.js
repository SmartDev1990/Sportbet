const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    let deployer
    let liq 
    let market
    let bet
    const DAI_ADDY = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";
    [deployer] = await ethers.getSigners();

    const Liquidity = await ethers.getContractFactory("Liquidity");
    liq = await Liquidity.deploy(DAI_ADDY);
    await liq.deployed();  
    console.log("Liquidity Contract Deployed at " + liq.address);

    const Market = await ethers.getContractFactory("Markets");
    market = await Market.deploy(1, 2);
    await market.deployed();  
    console.log("Market Contract Deployed at " + market.address);


    const Bet = await ethers.getContractFactory("Bet");
    bet = await Bet.deploy(DAI_ADDY, market.address, liq.address, 10);
    await bet.deployed();  
    console.log("Bet Contract Deployed at " + bet.address);


    await liq.setBetContract(bet.address);
    await market.setBetContract(bet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
