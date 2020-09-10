import React, { Fragment } from "react";

const RegContainer = (props) => {
  return (
    <Fragment>
      <div id="container-fluid" className={props.className}>
        <div id="reg-form-container">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default RegContainer;
