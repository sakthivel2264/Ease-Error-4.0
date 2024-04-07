import { prepareContractCall, resolveMethod } from "thirdweb"
import { useSendTransaction } from 'thirdweb/react';
import { useState } from "react";

export default function party() {
    const phrase = "Buy   a   Bond";
    const word = "Redeem a Bond"
  const { mutate: sendTransaction, isLoading, isError } = useSendTransaction();
  const [_name, setname] = useState('');
  const [user, setuser] = useState('');
  const [_partyAddress, set_partyAddress] = useState('');
  const [Address, setAddress] = useState('');

  const call = async () => {
    const transaction = await prepareContractCall({ 
      contract, 
      method: resolveMethod("addParty"), 
      params: [_name, _partyAddress] 
    });
    const { transactionHash } = await sendTransaction(transaction);
    // return transactionHash
  }
  return (
    <div className="flex flex-row m-auto bg-transparent mt-28 text-white min-h-screen gap-32 ">
                <div className="flex flex-col gap-4 text-xl">
        {phrase.split("").map((character, index) => (
                <span key={index}>{character}</span>
            ))}
        </div>
        <form onSubmit={call} className="border p-10 rounded-md flex flex-col h-[400px] gap-4 justify-center text-center">
      <label className="text-xl">
        User
      </label>
      <input
          type="text"
          value={_name}
          onChange={(e) => setname(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      <br />
      <label className="text-xl">
        Address 
      </label>
      <input
          type="text"
          value={_partyAddress}
          onChange={(e) => set_partyAddress(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      <br />
      <button type="submit"  className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ">Submit</button>
    </form>
    <div className="flex flex-col gap-4 text-lg">
  {word.split("").map((character, index) => (
        <span key={index}>{character}</span>
      ))}
  </div>
    <form onSubmit={call} className="border p-10 rounded-md flex flex-col h-[400px] gap-4 justify-center text-center">
      <label className="text-xl">
        Party 
      </label>
      <input
          type="text"
          value={user}
          onChange={(e) => setuser(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      <br />
      <label className="text-xl">
        Address 
      </label>
      <input
          type="text"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      <br />
      <button type="submit"  className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ">Submit</button>
    </form>
    </div>
  );
}