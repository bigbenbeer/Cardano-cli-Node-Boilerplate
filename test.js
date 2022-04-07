// Import the init module
const cardano = require('./cardano')

//funded wallet sending the payouts
const test = cardano.queryUtxo("EXAMPLE ADDRESS HERE")

console.log(test)