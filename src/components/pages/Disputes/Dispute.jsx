import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import DisputeContext from "../../../context/disputes/disputeContext";
import dateFormatter from "../../../utils/dateFormat";

const Dispute = () => {
  const disputeContext = useContext(DisputeContext);
  const { loadDisputes, disputes, loading } = disputeContext;

  useEffect(() => {
    loadDisputes();

    //eslint-disable-next-line
  }, []);

  function increaseCount() {
    let counter = 1;
    return function increase() {
      return counter++;
    };
  }
  const counter = increaseCount();

  let accepted = true;
  const displayDisputes = () => {
    return disputes.map((dispute) => {
      if (dispute) {
        accepted = true;
        return (
          <Fragment key={dispute._id}>
            <tr>
              <th scope="row">{counter()}</th>
              <td className="text-warning">{dispute.disputeStatus}</td>
              <td>{dateFormatter(dispute.createdAt)}</td>
              <td>{dispute.decision}</td>
            </tr>
          </Fragment>
        );
      } else {
        return null;
      }
    });
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <Spinner animation="border" />;
      </div>
    );
  }
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            className="bg-secondary p-3 shadow text-white rounded"
            style={{ height: "10vh" }}
          >
            <h5>Disputes</h5>
          </div>
        </div>
      </div>
      <div className="text-right my-3">
        <Link
          to="/dashboard/disputes/new-dispute"
          className="btn btn-outline-info"
        >
          New Dispute
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Decision</th>
            </tr>
          </thead>
          <tbody>{accepted ? displayDisputes() : <p>No Disputes</p>}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Dispute;
