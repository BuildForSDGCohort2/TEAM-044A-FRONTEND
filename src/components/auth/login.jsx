import React, { useState, useEffect, useContext, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import LoginContainer from "../Login/LoginContainer";
import LoginForm from "../Login/LoginForm";
import "./login.css";

// toast messages
const successMessage = () =>
  toast("Success!! Redirecting...", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "success",
  });
const missingValue = (val) =>
  toast(val, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "error",
  });

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { loginUser, clearErrors, isAuthenticated, error } = authContext;
  const { setAlert } = alertContext;
  const [loadBtn, updateLoadBtn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      successMessage();
      props.history.push("/dashboard");
    }
    if (error) {
      missingValue(error);
      updateLoadBtn(false);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [isAuthenticated, error, props.history]);

  const { email, password } = user;

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: [e.target.value] });

  const onSubmit = (e) => {
    e.preventDefault();

    updateLoadBtn(true);
    if (!email || !password) {
      missingValue("Please enter all fields");
      updateLoadBtn(null);
      clearErrors();
    } else {
      loginUser({
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <LoginContainer>
        <LoginForm
          email={email}
          onChange={onChange}
          onSubmit={onSubmit}
          password={password}
          loadBtn={loadBtn}
        />
      </LoginContainer>
    </Fragment>
  );
};

export default Login;
