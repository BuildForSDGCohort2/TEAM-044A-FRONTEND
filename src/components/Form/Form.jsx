import React, { Fragment } from "react";

const Form = (props) => {
  return (
    <Fragment>
      {props.bootstrap ? (
        <div
          className={props.cardclass ? props.cardclass : null}
          id={props.divid}
        >
          <form
            className={props.formclass ? props.formclass : null}
            onSubmit={props.onSubmit}
          >
            {props.children}
          </form>
        </div>
      ) : (
          <form
            className={props.formclass ? props.formclass : null}
            onSubmit={props.onSubmit}
            {...props}
          >
            {props.children}
          </form>
        ) || props.transaction ? (
        <form {...props}>{props.children}</form>
      ) : null}
    </Fragment>
  );
};

export default Form;
