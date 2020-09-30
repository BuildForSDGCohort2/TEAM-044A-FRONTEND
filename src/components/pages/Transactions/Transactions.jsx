import React, { Fragment, useContext, useEffect } from "react";
import TransactionContext from "../../../context/transactions/transactionContext";
import TransactionItem from "./TransactionItem";
import Spinner from "../../layouts/Spinner/Spinner";
import { CardColumns, Card } from "react-bootstrap";

const Transactions = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading } = transactionContext;

  useEffect(() => {
    loadTransactions();

    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <CardColumns>
        {transactions !== null && !loading ? (
          transactions.map((transaction) => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))
        ) : <Spinner /> || !transactions ? (
          <Card.Body>No transactions</Card.Body>
        ) : null}
      </CardColumns>
    </Fragment>
  );
};

export default Transactions;
