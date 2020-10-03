import React, { Fragment, useContext, useEffect } from "react";
import TransactionContext from "../../../context/transactions/transactionContext";
import TransactionItem from "./TransactionItem";
import { CardColumns, Spinner } from "react-bootstrap";

const Transactions = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading } = transactionContext;

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
  return (
    <Fragment>
      <CardColumns>
        {transactions !== null && !loading
          ? transactions.map((transaction) => (
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
              />
            ))
          : null}
      </CardColumns>
    </Fragment>
  );
};

export default Transactions;
