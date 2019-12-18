const ChainUtil = require('../chain-util');
const { DIFFICULTY, MINE_RATE } = require('../config');
class Block {
  constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
