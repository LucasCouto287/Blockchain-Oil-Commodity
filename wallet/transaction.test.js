const Transaction = require('./transaction');
const Wallet = require('./index');
const { MINING_REWARD } = require('../config');


describe('Transaction', () => {
    let transaction, wallet, recipient, amount;

    
    beforeEach(() => {
        wallet = new Wallet();
        amount = 50; 
        recipient = 'r3cp13nt';
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    });
