const Wallet = require('../wallet');
const Transaction = require('../wallet/transaction');

class Miner {

    constructor(blockchain, transactionPool, wallet, p2pServer){
  this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }
