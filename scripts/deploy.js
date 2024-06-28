const { ethers } = require("hardhat");

async function main() {
    const DataPublisher = await ethers.getContractFactory("DataPublisher");
    console.log("Deploying DataPublisher...");

    try {
        const dataPublisher = await DataPublisher.deploy();
        // await dataPublisher.deployed(); // Ensure the contract is deployed

        console.log("DataPublisher deployed to:", dataPublisher.address);
    } catch (error) {
        console.error("Deployment failed:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Unhandled error in deployment:", error);
        process.exit(1);
    });