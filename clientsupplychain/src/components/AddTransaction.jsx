import { prepareContractCall, resolveMethod } from "thirdweb"
import { useSendTransaction } from "@thirdweb-dev/react";


function AddTransaction() {
  const { mutate: sendTransaction, isLoading, isError } = useSendTransaction();

  const call = async () => {
    const transaction = await prepareContractCall({ 
      contract, 
      method: resolveMethod("addTransaction"), 
      params: [amount, description] 
    });
    const { transactionHash } = await sendTransaction(transaction);
    AddTransaction();
    console.log(transactionHash)
  }
}


function Withdraw() {
  const amount = "10"

  const { mutate: sendTransaction, isLoading, isError } = useSendTransaction();

  const call = async () => {
    const transaction = await prepareContractCall({ 
      contract, 
      method: resolveMethod("withdraw"), 
      params: [amount] 
    });
    const { transactionHash } = await sendTransaction(transaction);
    Withdraw()
    console.log(transactionHash)
  }
}


export default { AddTransaction, Withdraw };