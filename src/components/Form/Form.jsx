import React, { Fragment } from "react";

const Form = (props) => {
  return (
    <Fragment>
      <div
        className={`${
          props.cardclass ? "card d-flex justify-content-center mt-5" : ""
        }`}
      >
        <form className={`${props.formclass ? "p-5" : ""} `} {...props}>
          {props.children}
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
