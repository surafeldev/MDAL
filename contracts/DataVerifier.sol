// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDataPublisher {
    function getData(bytes32 dataHash) external view returns (bytes memory);
}

contract DataVerifier {
    IDataPublisher public dataPublisher;

    constructor(address publisherAddress) {
        dataPublisher = IDataPublisher(publisherAddress);
    }

    function verifyData(bytes32 dataHash, bytes calldata data) external view returns (bool) {
        bytes memory storedData = dataPublisher.getData(dataHash);
        return keccak256(storedData) == keccak256(data);
    }
}
