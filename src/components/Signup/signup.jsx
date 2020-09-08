import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// toast messages
const success_message = () =>
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
const missing_value = (val) =>
  toast("Something is wrong", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "error",
  });
const url = "https://moneyguard.herokuapp.com/api/v1/users";

export default function Signup() {
  const [loadBtn, updateLoadBtn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateLoadBtn(true);

    // form values
    let firstname = e.target.firstname.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let username = e.target.username.value;
    let phonenumber = e.target.phonenumber.value;
    let password = e.target.password.value;

    // check if values are true (i.e not empty)
    if (firstname && lastname && email && username && phonenumber && password) {
      const user = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        username: username,
        phoneNumber: phonenumber,
        password: password,
      };

      try {
        // const json = JSON.stringify(user);
        axios
          .post(url, user, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error.response.data.error));
      } catch (error) {
        console.error(error.response.data.error);
      }
      // .then(() => {
      //   updateLoadBtn(false);
      //   success_message();
      //   window.location = "/login";
      // })
      // .catch((e) => {
      //   console.log("ERRORRR", e);
      //   // missing_value(e.message);
      // });
    }
  };

  return (
    <section className="container">
      <ToastContainer />
      <div className="card d-flex justify-content-center mt-5">
        <form className="p-5" onSubmit={handleSubmit}>
          <h4>Register</h4>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              aria-describedby="nameHelp"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              aria-describedby="nameHelp"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              aria-describedby="nameHelp"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Phone number</label>
            <input
              type="number"
              className="form-control"
              name="phonenumber"
              placeholder="Enter Phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />
            <small id="emailHelp" className="form-text text-muted">
              Password must contain one uppercase, one number, and one special
              character.
            </small>
          </div>

          {loadBtn === false ? (
            <button type="submit" className="btn btn-info">
              Sign Up
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
