import React, { useState, useContext, useEffect } from "react";
import Modal from "../../Modal/Modal";
import Input from "../../Input/Input";
import WalletContext from "../../../context/wallets/walletContext";

const SendComponent = () => {
  const walletContext = useContext(WalletContext);
  const { transferMoney, clearFields, field } = walletContext;

  useEffect(() => {
    setText({
      amount: 0,
      operationType: "transfer",
      destinationWalletId: "",
    });
  }, [walletContext, field]);

  const [text, setText] = useState({
    amount: 0,
    operationType: "transfer",
    destinationWalletId: "",
  });

  const { amount, operationType, destinationWalletId } = text;
  const [send, setSend] = useState(false);
  const handleOpen = () => setSend(true);
  const handleClose = () => setSend(false);

  const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });
  const clearAll = () => clearFields();
  const onSubmit = (e) => {
    e.preventDefault();
    transferMoney(text);
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
            <select
              value={operationType}
              onChange={onChange}
              name="operationType"
            >
              <option value="transfer">Transfer</option>
            </select>
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
    </div>
  );
};

export default SendComponent;
