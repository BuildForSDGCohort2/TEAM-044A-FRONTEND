import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import TransactionContext from "../../../context/transactions/transactionContext";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const TransactionForm = (props) => {
  const transactionContext = useContext(TransactionContext);
  const { addTransaction, clearError, clearFields } = transactionContext;

  const [transaction, setTransaction] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inspectionPeriod: "",
    dueDate: "",
    phoneNumber: "",
    transactionTitle: "",
    transactionDesc: "",
    currency: "",
    amount: "",
  });

  const {
    firstName,
    lastName,
    email,
    inspectionPeriod,
    dueDate,
    phoneNumber,
    transactionTitle,
    transactionDesc,
    currency,
    amount,
  } = transaction;
  const onChange = (e) =>
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  const clearAll = () => clearFields();
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !inspectionPeriod ||
      !dueDate ||
      !phoneNumber ||
      !transactionTitle ||
      !transactionDesc ||
      !currency ||
      !amount
    ) {
      alert("Please enter all fields");
      clearError();
    } else {
      addTransaction({
        firstName,
        lastName,
        email,
        inspectionPeriod,
        dueDate,
        phoneNumber,
        transactionTitle,
        transactionDesc,
        currency,
        amount,
      });
    }
    clearAll();
    return props.history.push("/dashboard/transactions");
  };
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            className="bg-info p-3 shadow text-white rounded"
            style={{ height: "10vh" }}
          >
            <h5>Create Transaction</h5>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card p-3">
            <Form
              transaction
              className="create-transaction-form"
              onSubmit={onSubmit}
            >
              <div className="form-row">
                <div className="col">
                  <label htmlFor="fname">First name</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="lname">Last name</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col">
                  <label htmlFor="email">Email address</label>
                  <Input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="phone">Phone Nnumber</label>
                  <Input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="+234XXX"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col">
                  <label htmlFor="inspection">Inspection period</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="inspection"
                    placeholder="Inspection period"
                    name="inspectionPeriod"
                    value={inspectionPeriod}
                    onChange={onChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="inspection">Due date</label>
                  <Input
                    type="date"
                    className="form-control"
                    id="duedate"
                    name="dueDate"
                    value={dueDate}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="title">Transaction title</label>
                <Input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                  name="transactionTitle"
                  value={transactionTitle}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="description">Transaction description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  name="transactionDesc"
                  value={transactionDesc}
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="form-row mt-3">
                <div className="col">
                  <label htmlFor="currency">Currency</label>
                  <select
                    onChange={onChange}
                    className="form-control"
                    id="currency"
                    name="currency"
                    value={currency}
                  >
                    <option>Select currency</option>
                    <option value="Naira">&#8358;</option>
                    <option>&#36;</option>
                    <option>&pound;</option>
                    <option>&euro;</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="amount">Amount</label>
                  <Input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="Enter amount"
                    name="amount"
                    value={amount}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="text-center mt-3">
                <Button
                  name="Send Transaction"
                  type="submit"
                  class="btn btn-block btn-info"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(TransactionForm);
