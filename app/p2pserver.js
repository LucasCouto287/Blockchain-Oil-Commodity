const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

//These are the tree messages the server handles
const MESSAGE_TYPES = {
 chain: "CHAIN",
transaction: "TRANSACTION",
    clear_transactions: "CLEAR_TRANSACTIONS"
}
