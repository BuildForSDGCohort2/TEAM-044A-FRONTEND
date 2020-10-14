import React, { Fragment } from "react";
import PropTypes from "prop-types";
import dateFormatter from "../../../utils/dateFormat";

const AcceptedPayment = ({ transactions }) => {
  let accepted = true;
  const displayAccepted = () => {
    return transactions.map((transaction) => {
      if (transaction.accepted) {
        accepted = true;
        return (
          <Fragment>
            <div className="paymentBoxes d-flex  justify-content-between mt-4">
              <div className="p-3 pt-1">
                <h6 className="font-weight-bold text-capitalize">
                  {transaction.transactionTitle}
                </h6>
                <p className="text-muted">
                  {" "}
                  {dateFormatter(transaction.dateCreated)}
                </p>
              </div>
              <div>
                <h6 className="pt-4 pr-4 font-weight-bold">
                  &#x20A6;{transaction.amount / 100}
                </h6>
              </div>
            </div>
          </Fragment>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div>
      <div className="container  mt-5 acceptedPayments">
        <div className="container">
          <div className="d-flex justify-content-between p-2">
            <h5 className="font-weight-bold">Accepted transaction</h5>
          </div>
          <div>
            <div>
              <div>
                {accepted ? displayAccepted() : <p>No Accepted Transaction</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AcceptedPayment.propTypes = {
  transactions: PropTypes.array.isRequired,
};
export default AcceptedPayment;
