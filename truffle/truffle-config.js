require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');

// ganache -m "upgrade quantum pulse ill capable wise add fade bracket engine claw bomb"

module.exports = {
  contracts_build_directory: "../client/src/contracts",
  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    goerli: {
      provider: function() { 
        return new HDWalletProvider(
          //{mnemonic:{
            /*phrase:*/`${process.env.MNEMONIC}`, 
            /*providerUrl:*/`https://goerli.infura.io/v3/${process.env.INFURA_ID}`
          //}}
        )
      },
      network_id: 5, // --> https://chainlist.org/?search=goerli&testnets=true
    },

  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.18",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
  