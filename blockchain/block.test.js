 
const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block; 

 beforeEach(() => {
data = 'bar';
     lastBlock = Block.genesis();
     block = Block.mineBlock(lastBlock, data);
  });
