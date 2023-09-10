# Truffle Project Deployment to Vercel and Goerli Network

<!-- TOC -->

- [Truffle Project Deployment to Vercel and Goerli Network](#truffle-project-deployment-to-vercel-and-goerli-network)
	- [Overview:](#overview)
	- [Truffle Configuration:](#truffle-configuration)
	- [Deployment Instructions:](#deployment-instructions)
	- [Front-End Application:](#front-end-application)
	- [React Truffle Box](#react-truffle-box)
		- [Installation](#installation)
	- [FAQ](#faq)

<!-- /TOC -->

## Overview:

Welcome to the **Truffle** Project Deployment to **Vercel** and **Goerli** Network repository. In this project, we explore the seamless deployment of **Ethereum smart contracts** developed using Truffle to the Goerli test network and host a front-end application on Vercel for easy interaction.

## Truffle Configuration:

To get started, ensure you have Truffle installed globally. We have pre-configured Truffle for you, making it easy to deploy your smart contracts. Open the `truffle-config.js` file to see the network configurations, including the **Goerli network** settings.

```javascript
require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');

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
            `${process.env.MNEMONIC}`, 
            `https://goerli.infura.io/v3/${process.env.INFURA_ID}`
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
    }
  },

};
```

Ensure you have your **Infura API key** and **mnemonic** set up for secure deployments in your `.env` file.

Also, don't forget to initialize correctly your `.gitignore` file to prevent uneccesary files transfert and sensible information.

```bash
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# pendencies
node_modules
.pnp
.pnp.js

# Production
build
#--client/src/contracts
client/*/src/contracts

# Testing
coverage

# Env
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor
.vscode

# Misc.
.DS_Store

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# add
client/node_modules
```


## Deployment Instructions:

1. Compile your smart contracts using Truffle:
   ```shell
   truffle compile
   ```

2. Migrate your contracts to the Goerli network:
   ```shell
   truffle migrate --network goerli
   ```

3. Once your contracts are deployed, you'll receive contract addresses.

## Front-End Application:

Decentralized App is deployed on **Vercel** at [**React Truffle Box**](https://alyra-dapp-deploy.vercel.app/)

It's a basic React front-end application to interact with your smart contracts. The application is hosted on Vercel for easy access. To deploy your front end, make sure to configure your Vercel settings.

Enjoy deploying your Truffle project to Goerli and hosting it on Vercel!


## React Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a React app.

### Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Start the react dev server.

```sh
$ cd client
$ npm start
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Webpack](https://webpack.js.org). Either one would be a great place to start!
