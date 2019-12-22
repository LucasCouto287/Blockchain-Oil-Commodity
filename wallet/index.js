const ChainUtil = require('../chain-util');
const Transaction = require('./transaction');
const {INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE; 
        this.keyPair = ChainUtil.genKeyPair(); 
        this.publicKey = this.keyPair.getPublic().encode('hex'); 
    }
