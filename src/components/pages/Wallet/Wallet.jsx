import React, { Fragment, useState, useContext } from "react";
import PropTypes from "prop-types";
import dateFormatter from "../../../utils/dateFormat";
import upperFirst from "../../../utils/upperFirst";
import WalletContext from "../../../context/wallets/walletContext";
import Modal from "../../Modal/Modal";
import "./wallet.css";
import Input from "../../Input/Input";

const Wallet = ({ transactions, balance }) => {
  console.log({ transactions });
  const walletContext = useContext(WalletContext);
  const { depositMoney } = walletContext;
  const [show, setShow] = useState(false);
  const [text, setText] = useState({
    amount: 0,
    operationType: "deposit",
  });

  const { amount, operationType } = text;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    depositMoney({ amount, operationType });
  };

  // useEffect(() => {
  //   transactionHistory();

  //   //eslint-disable-next-line
  // }, []);
  return (
    <div>
      <div className="container shadow mb-4 mt-4 wallet ">
        <div className="d-flex justify-content-between pl-3 pt-3">
          <h6 className="text-success">MoneyGuard wallet</h6>
          {/* <h6 className="text-success"> Naira</h6> */}
        </div>
        <h2 className="pl-3 pt-2">&#x20A6; {balance}</h2>
        <div className="d-flex justify-content-around pt-3">
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
          <button className="btn btn-info "> send </button>
          <button className="btn btn-info"> more</button>
        </div>
        <hr />
        {transactions.map((transaction) => (
          <Fragment key={transaction._id}>
            <div className="d-flex justify-content-between pl-4 pt-3">
              <div>
                <h6>{upperFirst(transaction.operationType)}</h6>
                <p>{dateFormatter(transaction.createdAt)}</p>
              </div>
              <div>
                <h6>Wallet ID</h6>
                <p>{transaction.destinationWalletId}</p>
              </div>
              <div>
                <h6>Amount: {transaction.amount}</h6>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

Wallet.propTypes = {
  transactions: PropTypes.array.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Wallet;
