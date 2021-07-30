const { ethers } = require("hardhat");

async function main() {
  // Contract factory
  const MyNFT = await ethers.getContractFactory("MyNFT");

  const myNFT = await MyNFT.deploy(); // Instance of the contract
  console.log('Contract deployed to address: ', myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
});