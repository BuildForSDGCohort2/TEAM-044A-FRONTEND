import React, { Fragment } from "react";
import dateFormatter from "../../../utils/dateFormat";

const MyPayment = ({ transactions }) => {
  const returnAmount = () => {
    let sum = 0;
    transactions.forEach((transaction) => {
      if (transaction.tag === "bft") {
        sum += transaction.amount / 100;
      }
    });
    return sum;
  };

  let accepted = true;
  const displayPayments = () => {
    return transactions.map((transaction) => {
      if (transaction.tag === "bft") {
        accepted = true;
        return (
          <Fragment key={transaction._id}>
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
      <div style={{ marginTop: "8%" }} className="container  myPayments">
        <div className="container">
          <div className="d-flex justify-content-between p-2">
            <h5 className="font-weight-bold">My transaction</h5>
            <h5>Total: &#x20A6;{returnAmount()}</h5>
          </div>
          <div>
            <div>
              <div>
                {accepted ? displayPayments() : <p>No Payments Made</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPayment;
