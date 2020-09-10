import React, { useState, useEffect, useContext, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/auth/authContext";
import RegContainer from "./RegContainer";
import RegInfo from "./RegInfo";
import RegColumn from "./RegColumn";
import "./signup.css";

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

export default function Signup(props) {
  const authContext = useContext(AuthContext);
  const { register, clearErrors, isAuthenticated, error } = authContext;
  const [loadBtn, updateLoadBtn] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      successMessage();
      props.history.push("/login");
    }

    if (error) {
      missingValue(error);
      updateLoadBtn(false);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [isAuthenticated, error, props.history]);

  const { firstName, lastName, email, password, username, phoneNumber } = user;
  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: [e.target.value] });

  const onSubmit = (e) => {
    e.preventDefault();
    updateLoadBtn(true);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !username ||
      !phoneNumber
    ) {
      missingValue("Please enter all fields");
      updateLoadBtn(false);
      clearErrors();
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
        username,
        phoneNumber,
      });
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <RegContainer className="container-fluid py-4">
        <RegInfo />
        <RegColumn
          onChange={onChange}
          onSubmit={onSubmit}
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          phoneNumber={phoneNumber}
          loadBtn={loadBtn}
        />
      </RegContainer>
    </Fragment>
  );
}
