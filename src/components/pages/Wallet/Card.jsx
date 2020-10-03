import React from "react";

const Card = () => {
  return (
    <div>
      <div className="container shadow wallet">
        <div className="-flex justify-content-between pl-3 pt-3">
          <h6 className="text-success">Cards</h6>
        </div>

        <div className="d-flex justify-content-between pl-4 pt-5">
          <div>
            <h6>Visa</h6>
          </div>
          <div>
            <h6>600.00</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between pl-4 pt-4 pb-4">
          <div>
            <h6>Verve</h6>
          </div>
          <div>
            <h6>7000.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
