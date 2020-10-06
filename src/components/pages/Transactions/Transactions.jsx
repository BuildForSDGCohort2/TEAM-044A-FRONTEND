import React, { Fragment, useContext, useEffect, useState } from "react";
import TransactionContext from "../../../context/transactions/transactionContext";
import TransactionItem from "./TransactionItem";
import { CardColumns, Spinner } from "react-bootstrap";

const Transactions = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading, error } = transactionContext;
  const [status, setStatus] = useState(true);

  console.log(transactions);
  useEffect(() => {
    loadTransactions();

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner animation="border" />
      </div>
    );
  }

  // if (error) {
  //   console.log(error);
  //   return <Fragment>{error}</Fragment>;
  // }

  // let status = false;
  function displayTransactions() {
    if (transactions.length === 0) {
      return null;
    } else {
      setStatus(true);
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
    </Fragment>
  );
};

export default Transactions;
