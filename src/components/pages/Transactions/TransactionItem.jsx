import React, { useContext, Fragment, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";

import AuthContext from "../../../context/auth/authContext";
import TransactionContext from "../../../context/transactions/transactionContext";
import { Card, Button } from "react-bootstrap";
import ErrorBoundary from "../../ErrorBoundary/Error";
import { errorMessage } from "../../../utils/reactToast";
import { ONLINE_API, TRANSACTION_ROUTE } from "../../../utils/routes";

const TransactionItem = ({ transaction }) => {
  const authContext = useContext(AuthContext);
  const transactionContext = useContext(TransactionContext);
  const { user } = authContext;
  const { error, clearError } = transactionContext;
  const {
    transactionTitle,
    transactionDesc,
    transactionStatus,
    amount,
    reference,
    email,
    initiator,
  } = transaction;

  useEffect(() => {
    if (error) {
      errorMessage(error);
      clearError();
    }
  }, [error, clearError]);
  // paystackkk
  const config = {
    reference,
    email,
    amount,
    publicKey: "pk_test_79a84c67bb103eeee07c3d9cf656c197e6e56c4d",
  };

  const transactionRequests = async (link) => {
    await axios.patch(`${ONLINE_API}${TRANSACTION_ROUTE}/${link}/${reference}`);
  };

  const recipientStatus = () => {
    if (transactionStatus === "Awaiting Confirmation") {
      return (
        <Fragment>
          <div style={{ margin: "2px" }}>
            <Button
              variant="primary"
              onClick={() =>
                transactionRequests("accept-transaction").then((res) =>
                  window.location.reload()
                )
              }
            >
              Accept
            </Button>
          </div>
        </Fragment>
      );
    } else if (transactionStatus === "Accepted and Funded") {
      return (
        <Fragment>
          <div style={{ margin: "2px" }}>
            <Button
              variant="primary"
              onClick={() =>
                transactionRequests("progress").then((res) =>
                  window.location.reload()
                )
              }
            >
              Set In Progress
            </Button>
          </div>
        </Fragment>
      );
    } else if (transactionStatus === "In Progress") {
      return (
        <Fragment>
          <div style={{ margin: "2px" }}>
            <Button
              variant="primary"
              onClick={() =>
                transactionRequests("deliver").then((res) =>
                  window.location.reload()
                )
              }
            >
              Mark as Delivered
            </Button>
          </div>
        </Fragment>
      );
    }
  };

  const paystackSuccess = async ({ amount, details }) => {
    const body = {
      totalAmount: amount,
      details,
    };
    await axios
      .post(`${ONLINE_API}/api/v1/payment/paystack/callback`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => window.location.reload());
  };

  const initiatorStatus = (props) => {
    const componentProps = {
      ...config,
      text: "Make Payment",
      onSuccess: (details) => paystackSuccess({ amount, details }),
      onClose: () => null,
    };
    if (transactionStatus === "Transaction Accepted - Not funded") {
      return (
        <Fragment>
          <PaystackButton {...componentProps} />
        </Fragment>
      );
    } else if (transactionStatus === "Delivered") {
      return (
        <Fragment>
          <div style={{ margin: "2px" }}>
            <Button
              variant="primary"
              onClick={() =>
                transactionRequests("confirm").then(() =>
                  window.location.reload()
                )
              }
            >
              Confirm Delivery
            </Button>
          </div>
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <ErrorBoundary>
        <Card>
          <Card.Body>
            <Card.Title>Title - {transactionTitle}</Card.Title>
            <Card.Text>Description - {transactionDesc}</Card.Text>
            <Card.Text>Amount - {amount / 100}</Card.Text>
            <Card.Text>
              {user && user.map((u) => u._id)[0] !== initiator
                ? recipientStatus()
                : initiatorStatus()}
              {transactionStatus}
            </Card.Text>
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </Fragment>
  );
};

export default TransactionItem;
