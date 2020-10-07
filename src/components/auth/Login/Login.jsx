import React, { useState, useEffect, useContext, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/auth/authContext";
import LoginContainer from "./LoginContainer";
import LoginForm from "./LoginForm";
import { errorMessage, successMessage } from "../../../utils/reactToast";
import "./login.css";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { loginUser, clearErrors, isAuthenticated, error } = authContext;
  const [loadBtn, updateLoadBtn] = useState(false);
  const [user, setUserInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }

    if (error) {
      errorMessage(error);
      updateLoadBtn(false);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [isAuthenticated, error, props.history]);

  const { email, password } = user;

  const onChange = (e) =>
    setUserInfo({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    updateLoadBtn(true);
    if (!email || !password) {
      errorMessage("Please enter all fields");
      updateLoadBtn(false);
      clearErrors();
    } else {
      loginUser({
        email,
        password,
      }).then(() => successMessage());
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
