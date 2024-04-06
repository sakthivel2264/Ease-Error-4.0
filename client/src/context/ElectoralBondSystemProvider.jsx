import React, { useContext, createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const ElectoralBondSystemContext = createContext();

export const ElectoralBondSystemProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        const signer = provider.getSigner();
        setSigner(signer);

        const networkId = await provider.getNetwork().then(network => network.chainId);
        const contractAddress = 'CONTRACT_ADDRESS_HERE'; // Replace with your contract address

        // Define the interface of the contract
        const contractInterface = [
          "function users(address) public view returns (uint256, address, string memory, bool)",
          "function purchaseBond(uint256 partyId, uint256 amount) external",
          "function transferBond(uint256 bondId, address to) external",
          "function redeemBond(uint256 bondId) external",
          // Add other functions here if needed
        ];

        // Create the contract instance using ContractFactory
        const deployedContract = new ethers.Contract(contractAddress, contractInterface, signer);
        setContract(deployedContract);

        const accounts = await provider.listAccounts();
        setAccounts(accounts);

        if (accounts.length > 0) {
          const userAddress = accounts[0];
          const userData = await deployedContract.users(userAddress);
          const user = {
            id: userData[0].toNumber(),
            account: userData[1],
            name: userData[2],
            isOrganization: userData[3]
          };
          setUser(user);
        }
      } else {
        console.log("MetaMask is not installed!");
      }
    };

    init();
  }, []);

  const purchaseBond = async (partyId, amount) => {
    try {
      const tx = await contract.purchaseBond(partyId, amount);
      await tx.wait();
      console.log('Bond purchased successfully!');
    } catch (error) {
      console.error('Failed to purchase bond:', error);
    }
  };

  const transferBond = async (bondId, toAddress) => {
    try {
      const tx = await contract.transferBond(bondId, toAddress);
      await tx.wait();
      console.log('Bond transferred successfully!');
    } catch (error) {
      console.error('Failed to transfer bond:', error);
    }
  };

  const redeemBond = async (bondId) => {
    try {
      const tx = await contract.redeemBond(bondId);
      await tx.wait();
      console.log('Bond redeemed successfully!');
    } catch (error) {
      console.error('Failed to redeem bond:', error);
    }
  };

  return (
    <ElectoralBondSystemContext.Provider
      value={{
        provider,
        signer,
        contract,
        accounts,
        user,
        purchaseBond,
        transferBond,
        redeemBond,
      }}
    >
      {children}
    </ElectoralBondSystemContext.Provider>
  );
};

export const useElectoralBondSystem = () => useContext(ElectoralBondSystemContext);
