import React, { useReducer } from "react";
import {
  DEPOSIT_MONEY,
  TRANSFER_MONEY,
  WITHDRAW_MONEY,
  LOAD_BALANCE,
  WALLET_ERROR,
  WALLET_HISTORY,
} from "../types";
import WalletContext from "./walletContext";
import walletReducer from "./walletReducer";
import axios from "axios";
import API_URL from "../../config/url";

const WalletState = (props) => {
  const initialState = {
    balance: 0,
    loading: true,
    error: null,
    transactions: [],
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [state, dispatch] = useReducer(walletReducer, initialState);

  const loadBalance = async () => {
    try {
      const res = await axios.get(`${API_URL}/wallet/history`);

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
      const res = await axios.post(`${API_URL}/wallet/deposit`, data, config);
      console.log(res.data.data);
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
      const res = await axios.post(`${API_URL}/wallet/withdraw`, data, config);
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
      const res = await axios.post(`${API_URL}/wallet/withdraw`, data, config);
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
      const res = await axios.get(`${API_URL}/wallet/history`);
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

  return (
    <WalletContext.Provider
      value={{
        balance: state.balance,
        loading: state.loading,
        error: state.error,
        transactions: state.transactions,
        loadBalance,
        withdrawMoney,
        transferMoney,
        depositMoney,
        transactionHistory,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletState;
