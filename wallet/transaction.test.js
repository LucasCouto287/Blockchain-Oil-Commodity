const Transaction = require('./transaction');
const Wallet = require('./index');
const { MINING_REWARD } = require('../config');


describe('Transaction', () => {
    let transaction, wallet, recipient, amount;
