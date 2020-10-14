import React, { Fragment, useContext, useEffect } from "react";
import TransactionContext from "../../../context/transactions/transactionContext";
import TransactionItem from "./TransactionItem";
import { CardColumns, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const Transactions = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading } = transactionContext;

  useEffect(() => {
    loadTransactions();

    // if (error) {
    //   errorMessage(error);
    // }

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner animation="border" />
      </div>
    );
  }

  // let status = false;
  function displayTransactions() {
    if (transactions.length === 0) {
      return null;
    } else {
      return (
        <Fragment>
          {transactions[0].map((transaction) => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))}
        </Fragment>
      );
    }
  }
  return (
    <Fragment>
      <CardColumns>
        {transactions !== null && !loading ? (
          transactions[0].map((transaction) => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))
        ) : (
          <p>Done</p>
        )}
        {/* {status ? displayTransactions() : <p>No Transactions</p>} */}
        {/* {status ? displayTransactions() : <p>Hello</p>} */}
        {/* {displayTransactions()} */}
      </CardColumns>
      <ToastContainer />
    </Fragment>
  );
};

export default Transactions;
