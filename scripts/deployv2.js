const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0x3383EC7C7F54581b706b27D5fe438f8C6c685999";

async function main() {
  const V2Contract = await ethers.getContractFactory("OrbDAOv5");
  console.log("Upgrading V1Contract...");
  let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract, {});
  console.log("V1 Upgraded to V2");
  // console.log("V2 Contract tx hash :", upgrade.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
