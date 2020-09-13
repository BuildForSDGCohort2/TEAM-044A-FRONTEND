import React from "react";

const RegContainer = (props) => {
  return (
    <div id="container-fluid" className={props.className}>
      <div id="reg-form-container">{props.children}</div>
    </div>
  );
};

export default RegContainer;
