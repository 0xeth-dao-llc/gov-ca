const { ethers, upgrades } = require("hardhat");

async function main() {
  const V1contract = await ethers.getContractFactory("OrbDAO");
  console.log("Deploying V1 contract...");
  const v1contract = await upgrades.deployProxy(V1contract, [], {
    initializer: "init",
  });
  await v1contract.waitForDeployment();
  console.log("V1 Contract deployed to:", v1contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
