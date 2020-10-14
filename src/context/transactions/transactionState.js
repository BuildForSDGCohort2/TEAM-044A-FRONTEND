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
import { TRANSACTION_ROUTE, ONLINE_API } from "../../utils/routes";

const TransactionState = (props) => {
  const initialState = {
    transactions: [],
    loading: true,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const addTransaction = async (formData) => {
    try {
      const res = await axios.post(
        `${ONLINE_API}${TRANSACTION_ROUTE}/`,
        formData,
        config
      );
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
      const res = await axios.get(`${ONLINE_API}${TRANSACTION_ROUTE}/${ref}`);
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
      const res = await axios.get(`${ONLINE_API}${TRANSACTION_ROUTE}/`);

      dispatch({
        type: LOAD_TRANSACTIONS,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error.response.data.errors);
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const clearError = () =>
    setTimeout(() => dispatch({ type: CLEAR_ERRORS }), 2000);
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
