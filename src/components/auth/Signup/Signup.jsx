import React, { useState, useEffect, useContext, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/auth/authContext";
import RegContainer from "./RegContainer";
import RegInfo from "./RegInfo";
import RegColumn from "./RegColumn";
import { errorMessage } from "../../../utils/reactToast";
import "./signup.css";

const Signup = (props) => {
  const authContext = useContext(AuthContext);
  const { register, clearErrors, error } = authContext;
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
    if (error) {
      errorMessage(error);
      updateLoadBtn(false);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, props.history]);

  const { firstName, lastName, email, password, username, phoneNumber } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

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
      errorMessage("Please enter all fields");
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
      }).then(() => props.history.push("/verify"));
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
};

export default Signup;
