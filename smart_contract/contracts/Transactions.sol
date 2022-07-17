// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// pragma solidity >=0.5.0 <0.6.0;.
// transaction class for the  contract
contract Transactions {
    // a variable to store transactions of the contract
    uint256 transactionCount;
    //a function will be called later on
        // (type, variable name)
    event Transfer( 
        address from, 
        address recevier, 
        uint amount, 
        string message, 
        uint256 timestamp, 
        string keyword 
        );
    // a constructor to initialize the contract - like object constructor
    // type of property, name of the property
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    //variable transactions  is an array of TransferStruct
    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword )public {
       //incremet the transaction counter
       transactionCount += 1;
       transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

       emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
    // it returns array of TransferStruct from memory
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    
}