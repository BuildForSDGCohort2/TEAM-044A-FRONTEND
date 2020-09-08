import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// toast messages 
const success_message = () => toast("Success!! Redirecting...", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  type: "success"
});
const missing_value = () => toast("An Input value is missing...", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  type: "error"
});
const url = "https://moneyguard.herokuapp.com/api/v1/auth";

export default function Login() {
  const [loadBtn, updateLoadBtn] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    updateLoadBtn(true);

    // form values
    let email = e.target.email.value;
    let password = e.target.password.value;

    // check if values are true (i.e not empty) 
    if (email && password) {
      const user = {
        "email": email,
        "password": password
      };

      const json = JSON.stringify(user);
      axios.post(`${url}`, json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(async res => {
          updateLoadBtn(false);
          await success_message();
          let { token } = res.data;
          await localStorage.setItem("money_guard_token", token);
          window.location = "/dashboard";
        });
    } else {
      missing_value();
      updateLoadBtn(false);
    }
  }

  return (
    <section className="container">
      <ToastContainer />
      <div className="card d-flex justify-content-center mt-5">
        <form className="p-5" onSubmit={handleSubmit}>
          <h4>Login</h4>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Password
            </label>
          </div>

          {loadBtn === false ?
            <button type="submit" className="btn btn-info">Login</button>
            :
            <button type="submit" className="btn btn-success">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </button>
          }
        </form>
      </div>
    </section>
  );
}
