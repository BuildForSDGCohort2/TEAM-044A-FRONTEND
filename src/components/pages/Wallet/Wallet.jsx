import React, { useEffect, useContext } from "react";
import WalletItem from "./WalletItem";
import WalletContext from "../../../context/wallets/walletContext";
import DepositComponent from "./Deposit";
import SendComponent from "./SendComponent";
import ErrorBoundary from "../../ErrorBoundary/Error";
import { Spinner } from "react-bootstrap";
import "./wallet.css";

const Wallet = () => {
  const walletContext = useContext(WalletContext);
  const {
    loadBalance,
    transactionHistory,
    transactions,
    balance,
    loading,
  } = walletContext;

  useEffect(() => {
    loadBalance();
    transactionHistory();

    //eslint-disable-next-line
  }, []);
  return (
    <div className="walletContainer">
      <div className="walletFirstchild">
        <div className="container shadow mb-4 mt-4 wallet ">
          <div className="d-flex justify-content-between pl-3 pt-3">
            <h6 className="text-success">MoneyGuard wallet</h6>
          </div>
          <h2 className="pl-3 pt-2">
            &#x20A6; {loading ? <Spinner animation="border" /> : balance}
          </h2>
          <div className="d-flex justify-content-around pt-3">
            <ErrorBoundary>
              <DepositComponent />
            </ErrorBoundary>
            <ErrorBoundary>
              <SendComponent />
            </ErrorBoundary>
            {transactions !== null && !loading ? (
              transactions.map((transaction) => (
                <WalletItem
                  balance={balance}
                  key={transaction._id}
                  transactions={transaction}
                />
              ))
            ) : (
              <Spinner animation="grow" />
            )}
            <button className="btn btn-info"> more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
