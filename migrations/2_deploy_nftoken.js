var nfToken = artifacts.require('NFToken.sol');

module.exports = function(deployer) {
  deployer.deploy(nfToken)
};
