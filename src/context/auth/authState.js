import React, { useReducer } from "react";
import dotenv from "dotenv";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/token";
import {
  USER_LOADED,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR,
} from "../types";

dotenv.config();

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://moneyguard.herokuapp.com"
      : "http://localhost:3000";

  // LOAD USER
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get(`${API_URL}/api/v1/auth`);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // REGISTER_USER
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${API_URL}/api/v1/users`, formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data[0],
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  // LOGIN
  const loginUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${API_URL}/api/v1/auth/`, formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.errors[0].error,
      });
    }
  };

  //logout User
  const logoutUser = () => dispatch({ type: LOGOUT });
  const clearErrors = () =>
    setTimeout(() => dispatch({ type: CLEAR_ERRORS }), 2000);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loadUser,
        loginUser,
        logoutUser,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
