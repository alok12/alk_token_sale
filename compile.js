const path = require('path');
const fs = require('fs');
const solc = require('solc');

const dapptokenPath = path.resolve(__dirname,'contracts','DappToken.sol');

const source = fs.readFileSync(dapptokenPath, 'utf8');

module.exports = solc.compile(source,1).contracts[':DappToken'];

