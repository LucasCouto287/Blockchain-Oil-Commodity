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
