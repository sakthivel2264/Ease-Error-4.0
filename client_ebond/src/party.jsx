import { prepareContractCall, resolveMethod } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { useState } from "react";
import { contract } from "./App";
import { ConnectWallet , useAddress } from "@thirdweb-dev/react";

export default function Component() {
  const address = useAddress()
  const { mutate: sendTransaction, isLoading, isError } = useSendTransaction();
  const [name, setName] = useState('');
  const [partyAddress, setPartyAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const transaction = await prepareContractCall({ 
        contract, 
        method: resolveMethod("addParty"), 
        params: [name, partyAddress] 
      });
      const result = await sendTransaction(transaction);
      if (result && result.transactionHash) {
        console.log("Transaction submitted. Transaction hash:", result.transactionHash);
        setName('');
        setPartyAddress('');
        setError(''); // Clear any previous errors
      } else {
        setError("Transaction failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
      setError("Error submitting transaction. Please try again.");
    }
  }

  return (
    <>
    <ConnectWallet/>
    {
      address && <form onSubmit={handleSubmit}>
      <label>
        PartyName:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        PartyAddress:
        <input
          type="text"
          value={partyAddress}
          onChange={(e) => setPartyAddress(e.target.value)}
        />
      </label>
      <br />
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
      
    </form>
    }
    </>
  );
}
