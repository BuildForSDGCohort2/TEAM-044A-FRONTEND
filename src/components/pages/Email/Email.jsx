import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../../config/url.js";
import { Spinner } from "react-bootstrap";

const Email = (props) => {
  const [confirm, setConfirm] = useState(true);
  useEffect(() => {
    const { token } = props.match.params;

    async function confirmEmail() {
      await axios.get(`${API_URL}/email/verify/${token}`).then((res) => {
        console.log(res.data);
        setConfirm(false);
        setTimeout(function () {
          window.location.href = "http://localhost:3000/login";
        }, 3000);
      });
    }

    confirmEmail();
  }, [props.match.params]);
  return (
    <Fragment>
      {confirm ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>
            Your email has been verified. You will be redirected automatically
          </h1>
        </div>
      )}
    </Fragment>
  );
};

export default Email;
