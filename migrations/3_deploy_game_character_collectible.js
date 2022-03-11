const gameCharacterCollectible = artifacts.require('GameCharacterCollectible');

module.exports = function (deployer) {
  deployer.deploy(gameCharacterCollectible);
};
