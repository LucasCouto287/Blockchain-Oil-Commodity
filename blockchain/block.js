const ChainUtil = require('../chain-util');
const { DIFFICULTY, MINE_RATE } = require('../config');
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
