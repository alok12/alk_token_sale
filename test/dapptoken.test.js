// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');

// const web3 = new Web3(ganache.provider());

// const {interface, bytecode} = require('../compile');

// let dappToken;
// let accounts;

// beforeEach( async ()=>{
//     accounts = await web3.eth.getAccounts();

//     dappToken = await new web3.eth.Contract(JSON.parse(interface))
//                 .deploy({data: bytecode, arguments:['1000000']})
//                 .send({from: accounts[0], gas: '1000000'});
 
// });

// describe('dapptoken contract', ()=>{
//     it('test initialze', async ()=>{
//         assert.ok(dappToken.options.address);
//         const checkinitial = await dappToken.methods.totalSupply().call();
//         // console.log(checkinitial);
//         assert.equal(checkinitial,1000000,'test the supply. ')
//     });
//     it('check addmin balance', async ()=>{
//         const balance = await dappToken.methods.balanceOf(accounts[0]).call()
//         console.log(balance);
//     })
// });