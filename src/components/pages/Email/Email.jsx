import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../layouts/Spinner/Spinner";
import API_URL from "../../../config/url.js";

const Email = (props) => {
  const [confirm, setConfirm] = useState(true);
  // const API_URL = "https://moneyguard.herokuapp.com/api/v1/email/verify";
  useEffect(() => {
    const { token } = props.match.params;
    async function confirmEmail() {
      await axios.get(`${API_URL}/email/verify/${token}`).then((res) => {
        console.log(res);
        setConfirm(false);
      });
    }

    confirmEmail();
  }, [props.match.params]);
  return (
    <Fragment>
      {confirm ? (
        <Spinner />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Your email has been verified. You can go ahead and register</h1>
          {/* <Redirect to="/signup" /> */}
          <Link to="/signup">Register</Link>
        </div>
      )}
    </Fragment>
  );
};

export default Email;
