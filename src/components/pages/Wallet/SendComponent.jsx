import React, { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Modal from "../../Modal/Modal";
import Input from "../../Input/Input";
import WalletContext from "../../../context/wallets/walletContext";
import { errorMessage } from "../../../utils/reactToast";

const SendComponent = () => {
  const walletContext = useContext(WalletContext);
  const {
    transferMoney,
    clearFields,
    field,
    error,
    clearErrors,
  } = walletContext;

  useEffect(() => {
    setText({
      amount: 0,
      operationType: "transfer",
      destinationWalletId: "",
    });

    if (error) {
      errorMessage(error);
      clearErrors();
    }
  }, [walletContext, field, error, clearErrors]);

  const [text, setText] = useState({
    amount: 0,
    operationType: "transfer",
    destinationWalletId: "",
  });

  const { amount, destinationWalletId } = text;
  const [send, setSend] = useState(false);
  const handleOpen = () => setSend(true);
  const handleClose = () => setSend(false);

  const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });
  const clearAll = () => clearFields();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!amount || !destinationWalletId) {
      errorMessage("Please enter amount and account number");
    } else {
      transferMoney(text);
    }
    clearAll();
  };
  return (
    <div>
      <Modal send={send} handleClose={handleClose}>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label htmlFor="deposit">Send:</label>
            <Input
              type="number"
              name="amount"
              value={amount}
              onChange={onChange}
            />
            <Input
              type="text"
              name="destinationWalletId"
              value={destinationWalletId}
              onChange={onChange}
              placeholder="Wallet Id"
            />
            <button className="btn btn-info" onClick={handleClose}>
              Send
            </button>
          </div>
        </form>
      </Modal>
      <button onClick={handleOpen} className="btn btn-info ">
        {" "}
        Transfer{" "}
      </button>
      <ToastContainer />
    </div>
  );
};

export default SendComponent;
