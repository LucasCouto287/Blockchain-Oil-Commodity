const Wallet = require('./index');
const TransactionPool = require('./transaction-pool');
const Blockchain = require('../blockchain');
const { INITIAL_BALANCE } = require('../config');

describe('Wallet', () => {
  let wallet, tp, bc;

  
  beforeEach(() => {
 wallet = new Wallet();
    tp = new TransactionPool();
    bc = new Blockchain();
  });

    describe('creating a transaction', () => {
let transaction, sendAmount, recipient;
 beforeEach(() => {
 sendAmount = 50;
      recipient = 'r4nd0m-4ddr3s';
      transaction = wallet.createTransaction(recipient, sendAmount, bc, tp);
    });

      describe('and doing the same transaction', () => {
      beforeEach(() => {
        wallet.createTransaction(recipient, sendAmount, bc, tp);
      });
