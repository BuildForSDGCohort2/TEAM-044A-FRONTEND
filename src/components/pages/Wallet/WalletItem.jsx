import React from "react";
import dateFormatter from "../../../utils/dateFormat";
// import upperFirst from "../../../utils/upperFirst";
import PropTypes from "prop-types";

const WalletItem = ({ transactions }) => {
  const {
    destinationWalletId,
    operationType,
    createdAt,
    amount,
  } = transactions;
  return (
    <div>
      <div>
        <div>
          {/* <h6>
            {operationType.charAt(0).toUpperCase() + operationType.slice(1)}
          </h6> */}
          <h6>{operationType}</h6>
          <p>{dateFormatter(createdAt)}</p>
        </div>
        <div>
          <h6>Wallet ID</h6>
          <p>{destinationWalletId}</p>
        </div>
        <div>
          <h6>Amount: {amount}</h6>
        </div>
      </div>
    </div>
  );
};

WalletItem.propTypes = {
  transactions: PropTypes.object.isRequired,
};

export default WalletItem;
