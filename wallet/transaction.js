const ChainUtil = require('../chain-util');
const {
	MINING_REWARD
} = require('../config');
class Transaction {
	constructor() {
		this.id = ChainUtil.id();
		this.input = null;
		this.outputs = [];
	}
	update(senderWallet, recipient, amount) {
		const senderOutput = this.outputs.find(output => output.address === senderWallet.publicKey);
		if (amount > senderOutput.amount) {
			console.log(`Amount: ${amount} exceeds balance.`);
			return;
		}
		senderOutput.amount = senderOutput.amount - amount;
		this.outputs.push({
			amount,
			address: recipient
		});
		Transaction.signTransaction(this, senderWallet);
		return this;
	}

	
	
    static transactionWithOutputs(senderWallet, outputs) {
        const transaction = new this();
        transaction.outputs.push(...outputs);
        Transaction.signTransaction(transaction, senderWallet);
        return transaction;
    }
