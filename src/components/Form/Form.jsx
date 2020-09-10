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
        >
          {props.children}
        </form>
      )}
    </Fragment>
  );
};

export default Form;
