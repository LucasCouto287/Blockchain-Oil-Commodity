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
  
 it('adds a transaction to the pool', () => {
      expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction);
    });
