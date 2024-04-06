import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { ThirdwebProvider } from "thirdweb/react";
import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import AddTransaction from "./components/AddTransaction";

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "289bb70697dafcfcd707b5895d01acd9" 
});

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: sepolia, 
  address: "0x443Dbc2C64FcaA28f1aA80291BEDa1D336b31648"
});

function App() {
  return (
    <ThirdwebProvider>
      {/* <Navbar/>
      <Home/> */}
      <AddTransaction/>
    </ThirdwebProvider>
  )
}

export default App;