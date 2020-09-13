import React from "react";
import { Link } from "react-router-dom";

const TransactionItem = ({ transaction }) => {
  const {
    transactionTitle,
    transactionDesc,
    transactionStatus,
    amount,
    reference,
    email,
  } = transaction;
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade bg-light p-3 show active"
        id="active"
        role="tabpanel"
        aria-labelledby="active-tab"
      >
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  {transactionTitle ? transactionTitle : "Name"}
                </h5>
                <p className="card-text">{transactionDesc}</p>
                <p className="text-warning text-muted">{transactionStatus}</p>
                <div class="btn-group dropright">
                  <button
                    className="ml-1 btn btn-dark dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-eye"></i> View details
                  </button>
                  <div class="dropdown-menu">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <strong>Amount: </strong> {amount / 100}
                      </li>
                      <li class="list-group-item">
                        <strong>Ref number: </strong>
                        {reference}
                      </li>
                      <li class="list-group-item">
                        <strong>Email: </strong>
                        {email}
                      </li>
                      <li class="list-group-item">
                        <strong>ID: </strong>67890
                      </li>
                      <li class="list-group-item">
                        <strong>Status: </strong>
                        {transactionStatus}
                      </li>
                      {transactionStatus === "Awaiting Confirmation" ? (
                        <Link to={`/transaction/${reference}`}>
                          View Transaction
                        </Link>
                      ) : (
                        transactionStatus
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-none d-md-block mt-2"></div>
        </div>
      </div>
      <div
        className="tab-pane fade p-3 bg-light"
        id="closed"
        role="tabpanel"
        aria-labelledby="closed-tab"
      >
        <div className="row">
          <div className="col-6 col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="" />
              <div className="card-body">
                <h5 className="card-title">Transaction title</h5>
                <p className="card-text">Some brief description.</p>
                <button className="ml-1 btn btn-dark">View details</button>
              </div>
            </div>
          </div>

          <div className="w-100 d-none d-md-block mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
