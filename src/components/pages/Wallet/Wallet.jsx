import React, { Fragment } from "react";
import PropTypes from "prop-types";
import dateFormatter from "../../../utils/dateFormat";
import upperFirst from "../../../utils/upperFirst";
import "./wallet.css";

const Wallet = ({ transactions, balance }) => {
  return (
    <div>
      <div className="container shadow mb-4 mt-4 wallet ">
        <div className="d-flex justify-content-between pl-3 pt-3">
          <h6 className="text-success">MoneyGuard wallet</h6>
          {/* <h6 className="text-success"> Naira</h6> */}
        </div>
        <h2 className="pl-3 pt-2">&#x20A6; {balance}</h2>
        <div className="d-flex justify-content-around pt-3">
          <button className="btn btn-info">add money</button>
          <button className="btn btn-info "> send </button>
          <button className="btn btn-info"> more</button>
        </div>
        <hr />
        {transactions.map((transaction) => (
          <Fragment key={transaction._id}>
            <div className="d-flex justify-content-between pl-4 pt-3">
              <div>
                <h6>{upperFirst(transaction.operationType)}</h6>
                <p>{dateFormatter(transaction.createdAt)}</p>
              </div>
              <div>
                <h6>Wallet ID</h6>
                <p>{transaction.destinationWalletId}</p>
              </div>
              <div>
                <h6>Amount: {transaction.amount}</h6>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

Wallet.propTypes = {
  transactions: PropTypes.array.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Wallet;
