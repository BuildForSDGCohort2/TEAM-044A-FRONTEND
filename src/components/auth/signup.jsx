import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/auth/authContext";
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

  const { firstName, lastName, email, password, username, phoneNumber } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/login");
    }

    if (error) {
      missingValue(error);
      updateLoadBtn(false);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [isAuthenticated, error, props.history]);

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: [e.target.value] });

  const handleSubmit = (e) => {
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
      updateLoadBtn(null);
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
    <section className="container">
      <ToastContainer />
      <Form
        formclass="p-5"
        cardclass="card d-flex justify-content-center mt-5"
        onSubmit={handleSubmit}
      >
        <h4>Register</h4>
        <Input
          type="text"
          className="form-control"
          placeholder="Enter First Name"
          value={firstName}
          name="firstName"
          onChange={onChange}
          label="firstName"
          labeltitle="First Name"
        />
        <Input
          type="text"
          className="form-control"
          placeholder="Enter Last Name"
          value={lastName}
          name="lastName"
          onChange={onChange}
          label="lastName"
          labeltitle="Last Name"
        />
        <Input
          type="email"
          className="form-control"
          placeholder="Enter Email Address"
          value={email}
          name="email"
          onChange={onChange}
          label="email"
          labeltitle="Email Address"
        />
        <Input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          value={username}
          name="username"
          onChange={onChange}
          label="username"
          labeltitle="Username"
        />
        <Input
          type="text"
          className="form-control"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          name="phoneNumber"
          onChange={onChange}
          label="phoneNumber"
          labeltitle="Phone number"
        />
        <Input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
          name="password"
          onChange={onChange}
          label="password"
          labeltitle="Password"
        />
        {!loadBtn ? (
          <Button name="Register" type="submit" className="btn btn-info mt-2" />
        ) : (
          <Button spinner type="submit" className="btn btn-success" />
        )}
      </Form>
    </section>
  );
}
