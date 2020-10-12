import React, { useState, useContext, useEffect } from "react";
import Modal from "../../Modal/Modal";
import Input from "../../Input/Input";
import WalletContext from "../../../context/wallets/walletContext";

const DepositComponent = () => {
  const walletContext = useContext(WalletContext);
  const { depositMoney, clearFields, field } = walletContext;

  useEffect(() => {
    setText({
      amount: 0,
      operationType: "deposit",
    });
  }, [walletContext, field]);

  const [text, setText] = useState({
    amount: 0,
    operationType: "deposit",
  });

  const { amount, operationType } = text;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });
  const clearAll = () => {
    clearFields();
  };
  const onSubmit = (e) => {
    e.preventDefault();

    depositMoney(text);

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
            <select
              value={operationType}
              onChange={onChange}
              name="operationType"
            >
              <option value="deposit">Deposit</option>
            </select>
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
