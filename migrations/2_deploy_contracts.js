// const { artifacts } = require("hardhat");

const Bonobo = artifacts.require('./DearMonsters.sol');


module.exports = function(deployer, network, accounts) {
  console.log(network, accounts)
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts)
  })
}

async function deployContracts(deployer, network, accounts) {
   let bonobo = await deployer.deploy(Bonobo);
}
 