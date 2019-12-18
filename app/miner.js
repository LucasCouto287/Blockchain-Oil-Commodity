const Wallet = require('../wallet');
const Transaction = require('../wallet/transaction');

class Miner {

    constructor(blockchain, transactionPool, wallet, p2pServer){
