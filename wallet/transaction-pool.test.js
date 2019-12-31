const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');
const Blockchain = require('../blockchain');


describe('TransactionPool', () => {
    let tp, wallet, transaction, bc;
