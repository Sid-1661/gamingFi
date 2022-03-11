const myGameFiToken = artifacts.require('MyGameFiToken');

module.exports = function (deployer) {
  deployer.deploy(myGameFiToken);
};
