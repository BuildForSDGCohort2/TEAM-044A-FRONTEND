import React, { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      {props.bootstrap ? (
        <div className={`${props.formGroup ? "form-group" : ""}`}>
          <label htmlFor={props.label}>{props.labeltitle}</label>
          <input
            type={props.type ? props.type : "text"}
            className={props.className ? props.className : null}
            {...props}
            onChange={props.onChange}
          />
        </div>
      ) : (
          <input
            type={props.type ? props.type : "text"}
            className={props.className ? props.className : null}
            {...props}
            onChange={props.onChange}
          />
        )}
    </Fragment>
  );
};

export default Input;
