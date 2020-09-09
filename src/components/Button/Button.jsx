import React, { Fragment } from "react";

const Button = ({ name, spinner, type, className }) => {
  return (
    <Fragment>
      <button type={type} className={`${className ? className : ""}`}>
        {spinner ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}

        {name}
      </button>
    </Fragment>
  );
};

export default Button;
