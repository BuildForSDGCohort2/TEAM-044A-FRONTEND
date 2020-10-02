import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import image from "../../assets/images/secure-payments.jpg";

const RegInfo = () => {
  return (
    <Fragment>
      <div id="info-column">
        <h3 id="info-column">MoneyGuard</h3>
        <p>
          MoneyGuard provides 100% payment security for businessees and individuals across Nigeria.
        </p>
        <img src={image} alt="secure-payments" height="auto" width="100%"/>
        <Link to="/login">
          <Button
            type="button"
            className="btn btn-light mt-2"
            name="Have an account?"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default RegInfo;
