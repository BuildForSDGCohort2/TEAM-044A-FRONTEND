import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import Form from "../Form/Form";
import Input from "../Form/Input";
import Button from "../Button/Button";

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

  const handleSubmit = (e) => {
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
    <section className="container">
      <ToastContainer />
      <Form
        formclass="p-5"
        cardclass="card d-flex justify-content-center mt-5"
        onSubmit={handleSubmit}
      >
        <h4>Login</h4>
        <Input
          type="email"
          className="form-control"
          placeholder="Email Address"
          value={email}
          name="email"
          onChange={onChange}
          label="email"
          labeltitle="Email Address"
        />
        <Input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          name="password"
          onChange={onChange}
          label="password"
          labeltitle="Password"
        />
        {!loadBtn ? (
          <Button name="Login" type="submit" className="btn btn-info mt-2" />
        ) : (
          <Button spinner type="submit" className="btn btn-success" />
        )}
      </Form>
    </section>
  );
};

export default Login;
