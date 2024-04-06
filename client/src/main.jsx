import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { ElectoralBondSystemProvider } from "./context/ElectoralBondSystemProvider";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


const container = document.getElementById("root");
const root = ReactDOM.createRoot( document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      desiredChainId={ChainId.Sepolia}>
        <Router>
          <ElectoralBondSystemProvider>
            <App />
          </ElectoralBondSystemProvider>
        </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
