const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const P2pServer = require('./p2p-server');
const Wallet = require('../wallet');
const TransactionPool = require('../wallet/transaction-pool');
const Miner = require('./miner');

const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express(); 
const bc = new Blockchain();
const wallet = new Wallet();
const tp = new TransactionPool();
const p2pServer = new P2pServer(bc, tp);
const miner = new Miner(bc, tp, wallet, p2pServer);

//This class creates all of the endpoints for users to interact with the blockchain

app.use(bodyParser.json());

//Shows the user's full copy of the blockchain
app.get('/blocks', (req,res) => {
 res.json(bc.chain);
});

//Shows the user's copy of the unmined transaction pool
app.get('/transactions', (req, res) => {
  res.json(tp.transactions);
  });

//Add the cryptocurrency transactions onto the blockchain
app.get('/mine-transactions', (req,res) => {
 const block = miner.mine();
    console.log(`New block added ${block.toString()}`);
    res.redirect('/blocks');
});

//Show the user's public-key value
app.get('/public-key', (req, res) => {
 res.json({publicKey: wallet.publicKey});
});
