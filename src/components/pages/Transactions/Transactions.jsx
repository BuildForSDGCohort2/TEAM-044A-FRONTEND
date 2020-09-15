import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TransactionContext from "../../../context/transactions/transactionContext";
import TransactionItem from "./TransactionItem";
import Spinner from "../../layouts/Spinner/Spinner";

const Transactions = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading } = transactionContext;

  useEffect(() => {
    loadTransactions();
    //eslint-disable-next-line
  }, []);
  return (
    <section className="container">
      <section className="container d-flex justify-content-center mt-2 mb-5">
        <Link
          to="/dashboard/create-transactions"
          className="btn btn-outline-info mx-2"
        >
          Create Transaction
        </Link>
      </section>

      <ul
        className="nav nav-tabs d-flex justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="active-tab"
            data-toggle="tab"
            href="#active"
            role="tab"
            aria-controls="active"
            aria-selected="true"
          >
            Active Transactions
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="closed-tab"
            data-toggle="tab"
            href="#closed"
            role="tab"
            aria-controls="closed"
            aria-selected="false"
          >
            Closed Transactions
          </a>
        </li>
      </ul>
      <Fragment>
        {transactions !== null && !loading ? (
          transactions.map((transaction) => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))
        ) : (
          <Spinner />
        )}
      </Fragment>
    </section>
  );
};

export default Transactions;
