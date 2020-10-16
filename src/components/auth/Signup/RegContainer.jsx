import React from "react";


const RegContainer = (props) => {
  const bodyStyle = document.querySelector("body").style;
  bodyStyle.overflow = "hidden";
  
  return (
    <div id="container-fluid" className={props.className}>
      <div id="reg-form-container">{props.children}</div>
    </div>
  );
};

export default RegContainer;
