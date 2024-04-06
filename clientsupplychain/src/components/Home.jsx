import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                E² Bond Supplychain
              </a>
            </span>
          </h1>

          <p className="description">
          Unlock supply chain transparency and trust with our innovative fund, revolutionizing efficiency.
          </p>

          <div className="connect">
            <ConnectWallet />
          </div>
        </div>

        <div className="grid">
          <a
            href="https://thirdweb.com/dashboard/contracts/deploy"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Dashboard ➜</h2>
              <p>
                Manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
