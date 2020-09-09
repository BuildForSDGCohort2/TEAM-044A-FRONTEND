import React, { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      <div className={`${props.formGroup ? "form-group" : ""}`}>
        <label htmlFor={props.label}>{props.labeltitle}</label>
        <input
          type={props.type ? props.type : "text"}
          className={props.className ? "form-control" : props.className}
          {...props}
          onChange={props.onChange}
          // value={props.value}
          {...(props.smalltext ? (
            <small id="emailHelp" className="form-text text-muted">
              {props.text}
            </small>
          ) : null)}
        />
      </div>
    </Fragment>
  );
};

export default Input;
