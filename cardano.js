/* This package reads your environment variables from your .env file */
require('dotenv').config();

/* This loads the cardanocli-js Javascript wrapper for the Cardano-cli */
const Cardano = require('cardanocli-js')

if (process.env.NODE_CONFIG == 'testnet') {
    const cardano = new Cardano({
        shelleyGenesisPath: process.env.SHELLEY_GENESIS_PATH,
        socketPath: process.env.CARDANO_NODE_SOCKET_PATH,
        network: 'testnet-magic 1097911063'
    })
    module.exports = cardano
} else if (process.env.NODE_CONFIG == 'mainnet') {
    /* Initialize the Cardano object used to run calls to the Cardano node and the CLI */
    const cardano = new Cardano({
        shelleyGenesisPath: process.env.SHELLEY_GENESIS_PATH,
        socketPath: process.env.CARDANO_NODE_SOCKET_PATH,
        network: process.env.NODE_CONFIG
    })
    module.exports = cardano
}