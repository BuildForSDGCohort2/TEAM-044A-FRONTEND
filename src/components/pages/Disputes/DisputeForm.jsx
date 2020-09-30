import React, { Fragment, useEffect, useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import TransactionContext from "../../../context/transactions/transactionContext";
import DisputeContext from "../../../context/disputes/disputeContext";

const DisputeForm = () => {
  const transactionContext = useContext(TransactionContext);
  const { loadTransactions, transactions, loading } = transactionContext;
  const disputeContext = useContext(DisputeContext);
  const { addDispute, disputes } = disputeContext;
  const [dispute, setDispute] = useState({
    decision: "",
    disputeStatus: "Open",
    transactionId: "",
  });

  const onChange = (e) =>
    setDispute({ ...dispute, [e.target.name]: e.target.value });

  useEffect(() => {
    loadTransactions();

    //eslint-disable-next-line
  }, []);

  const { decision, disputeStatus, transactionId } = dispute;
  const onSubmit = (e) => {
    e.preventDefault();

    addDispute({
      decision,
      disputeStatus,
      transactionId,
    });
  };
  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicDecision">
          <Form.Label>Decision</Form.Label>
          <Form.Control
            type="text"
            placeholder="Decision"
            onChange={onChange}
            value={decision}
            name="decision"
          />
        </Form.Group>

        <Form.Group controlId="formBasicTransaction">
          <Form.Label>Transaction</Form.Label>
          <Form.Control
            name="transactionId"
            value={transactionId}
            as="select"
            onChange={onChange}
          >
            {transactions !== null && !loading
              ? transactions.map((transaction) => {
                  return (
                    <Fragment>
                      <option key={transaction._id} value={transaction._id}>
                        {transaction.transactionTitle}
                      </option>
                    </Fragment>
                  );
                })
              : null}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicDispute">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="disputeStatus"
            value={disputeStatus}
            onChange={onChange}
          >
            <option selected value="Open">
              Open
            </option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default DisputeForm;
