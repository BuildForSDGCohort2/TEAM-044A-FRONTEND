import React, { useReducer } from "react";
import disputesReducer from "./disputesReducer";
import DisputeContext from "./disputeContext";
import axios from "axios";
import {
  ADD_DISPUTE,
  GET_DISPUTE,
  LOAD_DISPUTES,
  TRANSACTION_ERROR,
} from "../types";
import { DISPUTE_ROUTE, ONLINE_API } from "../../utils/routes";

const DisputeState = (props) => {
  const initialState = {
    disputes: [],
    loading: true,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(disputesReducer, initialState);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const addDispute = async (formData) => {
    try {
      const res = await axios.post(
        `${ONLINE_API}${DISPUTE_ROUTE}`,
        formData,
        config
      );
      dispatch({ type: ADD_DISPUTE, payload: res.data });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const getDisputes = async (ref) => {
    try {
      const res = await axios.get(`${ONLINE_API}${DISPUTE_ROUTE}/${ref}`);
      dispatch({ type: GET_DISPUTE, payload: res.data });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  const loadDisputes = async () => {
    try {
      const res = await axios.get(`${ONLINE_API}${DISPUTE_ROUTE}`);
      console.log(res.data.data[0]);

      dispatch({
        type: LOAD_DISPUTES,
        payload: res.data.data[0],
      });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  return (
    <DisputeContext.Provider
      value={{
        disputes: state.disputes,
        current: state.current,
        loading: state.loading,
        error: state.error,
        addDispute,
        getDisputes,
        loadDisputes,
      }}
    >
      {props.children}
    </DisputeContext.Provider>
  );
};

export default DisputeState;
