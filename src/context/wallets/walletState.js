import React, { useReducer } from "react";
import {
  DEPOSIT_MONEY,
  TRANSFER_MONEY,
  WITHDRAW_MONEY,
  LOAD_BALANCE,
  WALLET_ERROR,
  WALLET_HISTORY,
  CLEAR_FIELDS,
} from "../types";
import WalletContext from "./walletContext";
import walletReducer from "./walletReducer";
import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://moneyguard.herokuapp.com"
    : "http://localhost:3000";

const WalletState = (props) => {
  const initialState = {
    balance: 0,
    loading: true,
    error: null,
    transactions: [],
    field: null,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [state, dispatch] = useReducer(walletReducer, initialState);

  const loadBalance = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/wallet/history`);

      dispatch({
        type: LOAD_BALANCE,
        payload: res.data.data[0].balance,
      });
    } catch (error) {
      dispatch({
        type: WALLET_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const depositMoney = async (data) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/wallet/deposit`,
        data,
        config
      );

      dispatch({ type: DEPOSIT_MONEY, payload: res.data.data });
      loadBalance();
    } catch (error) {
      dispatch({
        type: WALLET_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const withdrawMoney = async (data) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/wallet/withdraw`,
        data,
        config
      );
      dispatch({ type: WITHDRAW_MONEY, payload: res.data.data });
      loadBalance();
    } catch (error) {
      dispatch({
        type: WALLET_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const transferMoney = async (data) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/wallet/transfer`,
        data,
        config
      );
      dispatch({ type: TRANSFER_MONEY, payload: res.data.data });
      loadBalance();
    } catch (error) {
      dispatch({
        type: WALLET_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const transactionHistory = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/wallet/history`);
      dispatch({
        type: WALLET_HISTORY,
        payload: res.data.data[0].walletTransactions,
      });
    } catch (error) {
      dispatch({
        type: WALLET_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const clearFields = () => dispatch({ type: CLEAR_FIELDS });

  return (
    <WalletContext.Provider
      value={{
        balance: state.balance,
        loading: state.loading,
        error: state.error,
        transactions: state.transactions,
        field: state.field,
        loadBalance,
        withdrawMoney,
        transferMoney,
        depositMoney,
        transactionHistory,
        clearFields,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletState;
