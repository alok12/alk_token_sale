var DappToken = artifacts.require("./DappToken.sol");

contract('DappToken', function(accounts) {
    var tokenInstance;

    it('initialze the contract  with thr correct values', function(){
        return DappToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name, 'Alk Token', 'has the correct name');
            return tokenInstance.symbol();
        }).then(function(symbol){
            assert.equal(symbol,'ALK','has a symbol');
            return tokenInstance.standard();
        }).then(function(standard){
            assert.equal(standard,'ALK v1.0','passes')

        });
    });

    it('allocate the initial supply uplo development', function(){
        return DappToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1000000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance){
            assert.equal(adminBalance.toNumber(),1000000,'to allocate the initial supply.')
        })
    });

    it('transfer token ownership', function(){
        return DappToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.transfer.call(accounts[2],9999999999999999999999999);
        }).then(assert.fail).catch(function(error){
            assert(error.message.indexOf('revert'>=0,'error msg must contain revert'));
            return tokenInstance.transfer.call(accounts[1],250000,{from:accounts[0]})
        }).then(function(success){
            assert.equal(success,true,'Return the success true');
            return tokenInstance.transfer(accounts[1],250000,{from:accounts[0]})
        }).then(function(receipt){
            assert.equal(receipt.logs.length, 1, 'triggers one event');
            return tokenInstance.balanceOf(accounts[1]);
        }).then(function(balance){
            assert.equal(balance.toNumber(),250000,'Adds the amount to the receiving account');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(balance){
            assert.equal(balance.toNumber(),750000,'deducts theamount from the sender account');
        });
    })



});