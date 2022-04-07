# Cardano-cli-Node-Boilerplate
This is a blank boilerplate project to quickstart working with Node and Cardano-cli.

# First steps
## Pre-requisites
You must have a synced and running cardano-node instance on your machine. Without it, this entire example project is useless.

I would highly recommend at least 8GB of RAM with ZRAM configured to 150% your memory size. Else, you need 16GB of RAM!

## Configure .env
Copy the `.env.example` file and rename it to `.env`. Open the file and configure the paths.

## Install Dependencies
Run `npm install` to install the required dependencies

## Test Setup
Open the `test.js` file and add in a Cardano wallet address you would like to explore. I suggest grabbing a random address off pool.pm. 

Once done, run the file to test your installation. `node test.js`

If the wallet address contains any balances and is valid, you will see a list of UTXOs in your terminal.