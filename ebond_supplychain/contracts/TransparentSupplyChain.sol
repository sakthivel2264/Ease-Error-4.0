// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.0;

contract TransparentSupplyChain {
    struct Transaction {
        address sender;
        uint amount;
        string description;
        uint timestamp;
    }

    Transaction[] public transactions;
    uint public fund;

    event TransactionAdded(address indexed sender, uint amount, string description);

    constructor(uint initialFund) {
        fund = initialFund;
    }

    function addTransaction(uint amount, string memory description) external {
        require(amount > 0, "Amount must be greater than zero");
        require(amount <= fund, "Insufficient fund");

        fund -= amount;
        transactions.push(Transaction(msg.sender, amount, description, block.timestamp));
        emit TransactionAdded(msg.sender, amount, description);
    }

    function getTransactionsCount() external view returns (uint) {
        return transactions.length;
    }

    function getTransaction(uint index) external view returns (address, uint, string memory, uint) {
        require(index < transactions.length, "Index out of bounds");

        Transaction memory transaction = transactions[index];
        return (transaction.sender, transaction.amount, transaction.description, transaction.timestamp);
    }

    function getFund() external view returns (uint) {
        return fund;
    }

    function withdraw(uint amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(amount <= fund, "Insufficient fund");

        fund -= amount;
        payable(msg.sender).transfer(amount);
    }
}
