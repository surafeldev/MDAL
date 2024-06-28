const { expect } = require("chai");
// Ensure ethers is imported correctly
const { ethers } = require("hardhat");

describe("DataPublisher", function () {
    it("Should publish and retrieve data", async function () {
        const DataPublisher = await ethers.getContractFactory("DataPublisher");
        const dataPublisher = await DataPublisher.deploy();
        // Removed the unnecessary await dataPublisher.deployed();

        const data = ethers.utils.toUtf8Bytes("Test data");
        const dataHash = ethers.utils.keccak256(data);

        await dataPublisher.publishData(data);
        expect(await dataPublisher.getData(dataHash)).to.equal(data);
    });
});

describe("DataVerifier", function () {
    it("Should verify data", async function () {
        const DataPublisher = await ethers.getContractFactory("DataPublisher");
        // Assuming similar logic follows, ensure to remove any unnecessary await dataPublisher.deployed();
        // Continue with your test logic here
    });
});