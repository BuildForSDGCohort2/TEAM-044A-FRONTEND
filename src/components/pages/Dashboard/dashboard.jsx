import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import AcceptedPayment from "./AcceptedPayment";
import MyPayment from "./MyPayment";
import "./style.css";
import TransactionContext from "../../../context/transactions/transactionContext";
import { Spinner } from "react-bootstrap";
import ErrorBoundary from "../../ErrorBoundary/Error";

export default function MainDashboard() {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading } = transactionContext;

  useEffect(() => {
    loadTransactions();

    //eslint-disable-next-line
  }, []);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <Fragment>
      <section className="container">
        <div className="row">
          <div className="dashboardHeader col-md-12  shadow text-black  rounded d-flex justify-content-between">
            <div className="pt-3 " style={{ height: "10vh" }}>
              {user &&
                user.map((person) => (
                  <h5 key={person._id}>{person.firstName} Dashboard</h5>
                ))}
            </div>
            <div className="headerLink rounded">
              <Link
                to="/dashboard/create-transactions"
                className="link text-info "
              >
                Create Transaction
              </Link>
            </div>
          </div>
        </div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}
          >
            <Spinner animation="grow" />
          </div>
        ) : (
          <Fragment>
            <ErrorBoundary>
              <AcceptedPayment transactions={transactions} />
            </ErrorBoundary>
            <ErrorBoundary>
              <MyPayment transactions={transactions} />
            </ErrorBoundary>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
}
