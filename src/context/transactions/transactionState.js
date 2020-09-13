import React, { useReducer } from "react";
import transactionReducer from "./transactionReducer";
import TransactionContext from "./transactionContext";
import axios from "axios";
import {
  ADD_TRANSACTION,
  CLEAR_ERRORS,
  GET_TRANSACTION,
  LOAD_TRANSACTIONS,
  TRANSACTION_ERROR,
  CLEAR_FIELDS,
} from "../types";

const TransactionState = (props) => {
  const initialState = {
    transactions: [],
    loading: true,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const TRANSACTION_URL =
    "https://moneyguard.herokuapp.com/api/v1/transactions";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const addTransaction = async (formData) => {
    try {
      const res = await axios.post(`${TRANSACTION_URL}`, formData, config);
      dispatch({ type: ADD_TRANSACTION, payload: res.data });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const getTransaction = async (ref) => {
    try {
      const res = await axios.get(`${TRANSACTION_URL}/${ref}`);
      dispatch({ type: GET_TRANSACTION, payload: res.data });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const loadTransactions = async () => {
    try {
      const res = await axios.get(
        "https://moneyguard.herokuapp.com/api/v1/auth"
      );
      console.log(res.data.data);

      dispatch({
        type: LOAD_TRANSACTIONS,
        payload: res.data.data[0].transactions,
      });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const clearError = () => dispatch({ type: CLEAR_ERRORS });
  const clearFields = () => dispatch({ type: CLEAR_FIELDS });

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        current: state.current,
        loading: state.loading,
        error: state.error,
        addTransaction,
        getTransaction,
        loadTransactions,
        clearError,
        clearFields,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
