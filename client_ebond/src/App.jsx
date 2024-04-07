import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { ThirdwebProvider } from "thirdweb/react";
import Party from "./party"

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "f60235c8aabde50497d5190a67a0e831" 
});

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: sepolia, 
  address: "0x6Be19244a8f5B307A07DCa6A135276D3EfF2E965"
});

export default function app() {
  return (
    <ThirdwebProvider>
      <Party/>
    </ThirdwebProvider>
  )
}