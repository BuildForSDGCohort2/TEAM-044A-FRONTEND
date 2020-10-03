import React, { useContext, useEffect } from "react";
import WalletContext from "../../../context/wallets/walletContext";
import Wallet from "./Wallet";
// import Card from "./Card";
import "./wallet.css";

const Wallets = () => {
  const walletContext = useContext(WalletContext);
  const {
    loadBalance,
    transactionHistory,
    transactions,
    balance,
  } = walletContext;

  useEffect(() => {
    loadBalance();
    transactionHistory();

    //eslint-disable-next-line
  }, []);
  return (
    <div className="walletContainer">
      <div className="walletFirstchild">
        <Wallet transactions={transactions} balance={balance} />
        {/* <Payment /> */}
      </div>
      {/* <div className="walletLastchild">
        <Card />
      </div> */}
    </div>
  );
};

export default Wallets;
