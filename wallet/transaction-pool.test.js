const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');
const Blockchain = require('../blockchain');


describe('TransactionPool', () => {
    let tp, wallet, transaction, bc;

   
 beforeEach(() => {
      tp = new TransactionPool();
      wallet = new Wallet();
      bc = new Blockchain();
      transaction = wallet.createTransaction('r4nd-4dr355', 30, bc, tp);
    });
  
