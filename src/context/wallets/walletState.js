import React, { useReducer } from "react";
import {
  DEPOSIT_MONEY,
  TRANSFER_MONEY,
  WITHDRAW_MONEY,
  LOAD_BALANCE,
  WALLET_ERROR,
  WALLET_HISTORY,
  CLEAR_FIELDS,
  CLEAR_ERRORS,
} from "../types";
import WalletContext from "./walletContext";
import walletReducer from "./walletReducer";
import axios from "axios";
import { WALLET_ROUTE, ONLINE_API } from "../../utils/routes";

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
      const res = await axios.get(`${ONLINE_API}${WALLET_ROUTE}/history`);

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
        `${ONLINE_API}${WALLET_ROUTE}/deposit`,
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
        `${ONLINE_API}${WALLET_ROUTE}/withdraw`,
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
        `${ONLINE_API}${WALLET_ROUTE}/transfer`,
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
      const res = await axios.get(`${ONLINE_API}${WALLET_ROUTE}/history`);
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
  const clearErrors = () =>
    setTimeout(() => dispatch({ type: CLEAR_ERRORS }), 3000);

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
        clearErrors,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletState;
