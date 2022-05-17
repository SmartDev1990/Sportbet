require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require("hardhat-interface-generator");
require("hardhat-gas-reporter");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

abiExporter: [
  {
    pretty: false,
    runOnCompile: true
  }
]



module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/zzdikT2BoUCO8gxk57lf8_NqFQ0MnUG7"
      }
    },
    kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/HEbnEOx1ZKSDnssxjxDbsPS3LykdVbup",
      accounts: ["9a3609a0d72d681eb901bc822724593ad63d3feb32cc9e92c4b801750964a1ad"]
    }

  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21
  }
};
