// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import ERC20 interface for token transfers
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ElectoralBondSystem {
    // Define the User struct to store user details
    struct User {
        uint256 id;
        address account;
        string name;
        bool isOrganization;
    }

    // Define the political party struct
    struct PoliticalParty {
        uint256 id;
        string name;
        uint256 totalAmountReceived;
        address partyAddress;
    }

    // Define the electoral bond struct
    struct ElectoralBond {
        uint256 id;
        uint256 partyId;
        uint256 userId;
        uint256 amountPaid;
        bool isRedeemed;
    }

    // Mapping to track users
    mapping(address => User) public users;
    uint256 public nextUserId;

    // Mapping to track political parties
    mapping(uint256 => PoliticalParty) public parties;
    uint256 public nextPartyId;

    // Mapping to track electoral bonds
    mapping(uint256 => ElectoralBond) public electoralBonds;
    uint256 public nextBondId;

    // Token contract address (Assuming ERC20 token for simplicity)
    IERC20 public token;

    // Event for bond issuance
    event BondIssued(uint256 indexed bondId, uint256 indexed partyId, uint256 indexed userId, uint256 amountPaid);

    // Constructor to initialize the token contract
    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    // Function to add a user (individual or organization) to the system
    function addUser(string memory _name, bool _isOrganization) external {
        users[msg.sender] = User(nextUserId, msg.sender, _name, _isOrganization);
        nextUserId++;
    }

    // Function to add a political party to the system
    function addParty(string memory _name, address _partyAddress) external {
        parties[nextPartyId] = PoliticalParty(nextPartyId, _name, 0, _partyAddress);
        nextPartyId++;
    }

    // Function to purchase electoral bonds for a political party
    function purchaseBond(uint256 _partyId, uint256 _amountPaid) external {
        require(_amountPaid > 0, "Amount must be greater than zero");
        token.transferFrom(msg.sender, address(this), _amountPaid);
        electoralBonds[nextBondId] = ElectoralBond(nextBondId, _partyId, users[msg.sender].id, _amountPaid, false);
        parties[_partyId].totalAmountReceived += _amountPaid;
        emit BondIssued(nextBondId, _partyId, users[msg.sender].id, _amountPaid);
        nextBondId++;
    }

    // Function to transfer electoral bonds between users
    function transferBond(uint256 _bondId, address _to) external {
        require(electoralBonds[_bondId].userId == users[msg.sender].id, "You are not the owner of this bond");
        require(!electoralBonds[_bondId].isRedeemed, "Bond has already been redeemed");
        electoralBonds[_bondId].userId = users[_to].id;
    }

    // Function to redeem electoral bonds (for simulation purposes)
    function redeemBond(uint256 _bondId) external {
        require(electoralBonds[_bondId].userId == users[msg.sender].id, "You are not the owner of this bond");
        require(!electoralBonds[_bondId].isRedeemed, "Bond has already been redeemed");
        // Perform actions for bond redemption (e.g., grant voting rights)
        electoralBonds[_bondId].isRedeemed = true;
    }
}