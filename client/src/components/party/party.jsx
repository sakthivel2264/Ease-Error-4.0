import { prepareContractCall, resolveMethod } from "thirdweb"
import { useSendTransaction } from "@thirdweb-dev/react";

export default function party() {
  const { mutate: sendTransaction, isLoading, isError } = useSendTransaction();
  const [_name, setname] = useState('');
  const [_partyAddress, set_partyAddress] = useState('');

  const call = async () => {
    const transaction = await prepareContractCall({ 
      contract, 
      method: resolveMethod("addParty"), 
      params: [_name, _partyAddress] 
    });
    const { transactionHash } = await sendTransaction(transaction);
    return transactionHash
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1:
        <input
          type="text"
          value={_name}
          onChange={(e) => setname(e.target.value)}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          type="text"
          value={_partyAddress}
          onChange={(e) => set_partyAddress(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={clearForm}>Clear</button>
    </form>
  );
}