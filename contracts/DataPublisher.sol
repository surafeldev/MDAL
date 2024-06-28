// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataPublisher {
    event DataPublished(bytes32 indexed dataHash, bytes data);

    mapping(bytes32 => bytes) public dataStore;

    function publishData(bytes calldata data) external {
        bytes32 dataHash = keccak256(data);
        dataStore[dataHash] = data;
        emit DataPublished(dataHash, data);
    }

    function getData(bytes32 dataHash) external view returns (bytes memory) {
        return dataStore[dataHash];
    }
}
