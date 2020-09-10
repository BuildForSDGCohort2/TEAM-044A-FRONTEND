import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

const RegInfo = () => {
  return (
    <Fragment>
      <div id="info-column">
        <h3 id="info-column">MoneyGuard</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
          consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet
          consectetur ipsum dolor sit amet consectetur
        </p>
        <Link to="/login">
          <Button
            type="button"
            className="btn btn-light"
            name="Have an account?"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default RegInfo;
