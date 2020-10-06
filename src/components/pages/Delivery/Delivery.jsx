import React, { useContext, useEffect, Fragment } from "react";
import TransactionContext from "../../../context/transactions/transactionContext";
import moment from "moment";
import { Link } from "react-router-dom";

const ConfirmDelivery = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions } = transactionContext;

  useEffect(() => {
    loadTransactions();

    //eslint-disable-next-line
  }, []);

  const dateFormatter = (date) => {
    return moment(date).format("MMMM Do YYYY");
  };

  function increaseNumber() {
    let counter = 1;
    return function increaseMe() {
      return counter++;
    };
  }

  let accepted = true;
  const displayAccepted = () => {
    return transactions.map((transaction) => {
      if (transaction.tag === "bco") {
        accepted = true;
        return (
          <Fragment>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Created date</th>
                <th scope="col">Due date</th>
                <th scope="col">View Transaction</th>
              </tr>
            </thead>
            <tbody>
              <tr key={transaction._id}>
                <th scope="row">{increaseId()}</th>
                <td>{transaction.transactionTitle}</td>
                <td>{transaction.amount / 100}</td>
                <td>{transaction.transactionStatus}</td>
                <td>{dateFormatter(transaction.dateCreated)}</td>
                <td>{dateFormatter(transaction.dueDate)}</td>
                <td>
                  <Link to={`/transaction/${transaction.reference}`}>
                    Something
                  </Link>
                </td>
              </tr>
            </tbody>
          </Fragment>
        );
      } else {
        return null;
      }
    });
  };

  const increaseId = increaseNumber();
  return (
    <section className="container">
      <h4>Completed Transactions</h4>
      <div className="table-responsive">
        <table className="table table-bordered mt-3">
          {accepted ? displayAccepted() : <p>No Completed Transactions</p>}
        </table>
      </div>
    </section>
  );
};

export default ConfirmDelivery;
