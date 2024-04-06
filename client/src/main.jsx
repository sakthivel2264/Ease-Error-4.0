import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import { ElectoralBondSystemProvider } from "./context/ElectoralBondSystemProvider";
import "./index.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const root = createRoot(document.getElementById("root"));

const container = document.getElementById("root");

root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
      {/* <Router> */}
        <ElectoralBondSystemProvider>
          <App />
        </ElectoralBondSystemProvider>
      {/* </Router> */}
    </ThirdwebProvider>
  </React.StrictMode>
);
