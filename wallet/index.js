const ChainUtil = require('../chain-util');
const Transaction = require('./transaction');
const {INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE; 
        this.keyPair = ChainUtil.genKeyPair(); 
        this.publicKey = this.keyPair.getPublic().encode('hex'); 
    }
    
     toString() {
  return `Wallet - 
        publicKey: ${this.publicKey.toString()}
        balance: ${this.balance}`
    }

    sign(dataHash) {
        return this.keyPair.sign(dataHash);
    }
    
createTransaction(recipient, amount,blockchain, transactionPool) {
        this.balance = this.calculateBalance(blockchain);

    
        if (amount > this.balance) {
            console.log(`Amount: ${amount} exceeds current balance: ${this.balance}`);
            return;
        }