const ChainUtil = require('../chain-util');
const {
	DIFFICULTY,
	MINE_RATE
} = require('../config');
class Block {
	constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
		this.nonce = nonce;
		this.difficulty = difficulty || DIFFICULTY;
	}
	toString() {
		return `Block - 
 Timestamp : ${this.timestamp}
      Last Hash : ${this.lastHash.substring(0,10)}
 Hash      : ${this.hash.substring(0,10)}
      Nonce     : ${this.nonce}
Difficulty: ${this.difficulty}
      Data      : ${this.data}`;
	}
	static genesis() {
		return new this('Genesis time', '-----', 'theGenesisBlock', [], 0, DIFFICULTY);
	}
	static mineBlock(lastBlock, data) {
		let hash, timestamp;
		const lastHash = lastBlock.hash;
		let {
			difficulty
		} = lastBlock;
		let nonce = 0;
		//Proof of Work is established here
		do {
			nonce++;
			timestamp = Date.now();
			difficulty = Block.adjustDifficulty(lastBlock, timestamp);
			hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
		} while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
		return new this(timestamp, lastHash, hash, data, nonce, difficulty);
	}
	static hash(timestamp, lastHash, data, nonce, difficulty) {
		return ChainUtil.hash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
	}
	static blockHash(block) {
		const {
			timestamp,
			lastHash,
			data,
			nonce,
			difficulty
		} = block;
		return Block.hash(timestamp, lastHash, data, nonce, difficulty);
	}
	//This method checks the timestamp from the previous block to see if the time passed is greater than or less than the mine rate
	//and then accordingly decreases or increases the difficulty
	static adjustDifficulty(lastBlock, currentTime) {
		let {
			difficulty
		} = lastBlock;
		difficulty = lastBlock.timestamp + MINE_RATE > currentTime ? difficulty + 1 : difficulty - 1;
		return difficulty;
	}
}
module.exports = Block;
