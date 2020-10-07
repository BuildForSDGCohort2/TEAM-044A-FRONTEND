import React, { useState, useContext, useEffect } from "react";
import Modal from "../../Modal/Modal";
import Input from "../../Input/Input";
import WalletContext from "../../../context/wallets/walletContext";
import { errorMessage } from "../../../utils/reactToast";

const DepositComponent = () => {
  const walletContext = useContext(WalletContext);
  const {
    depositMoney,
    clearFields,
    field,
    error,
    clearErrors,
  } = walletContext;

  useEffect(() => {
    setText({
      amount: 0,
      operationType: "deposit",
    });

    if (error) {
      errorMessage(error);
    }
  }, [walletContext, field, clearErrors, error]);

  const [text, setText] = useState({
    amount: 0,
    operationType: "deposit",
  });

  const { amount } = text;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });
  const clearAll = () => {
    clearFields();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      errorMessage("Please enter an amount.");
    } else {
      depositMoney(text);
    }

    clearAll();
  };

  return (
    <div>
      <Modal show={show} handleClose={handleClose}>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label htmlFor="deposit">Deposit:</label>
            <Input
              type="number"
              name="amount"
              value={amount}
              onChange={onChange}
            />
            <button onClick={handleClose}>Deposit</button>
          </div>
        </form>
      </Modal>
      <button onClick={handleShow} className="btn btn-info">
        Deposit
      </button>
    </div>
  );
};

export default DepositComponent;
