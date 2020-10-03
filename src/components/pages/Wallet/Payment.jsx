import React from "react";
import "./wallet.css";

const Payment = () => {
  return (
    <div>
      <div className="container shadow wallet">
        <div className="-flex justify-content-between pl-3 pt-3">
          <h6 className="text-success">Recurring Payments</h6>
        </div>

        <div className="d-flex justify-content-between pl-4 pt-3">
          <div>
            <h6>Netflix</h6>
            <p>June 6, 10:34</p>
          </div>
          <div>
            <h6>60.00</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between pl-4">
          <div>
            <h6>Uber</h6>
            <p>June 6, 10:34</p>
          </div>
          <div>
            <h6>70.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
