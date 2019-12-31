const ChainUtil = require('../chain-util');
const { MINING_REWARD} = require('../config');

class Transaction {
    constructor() {
        this.id = ChainUtil.id();
        this.input = null;
        this.outputs = [];
    }
