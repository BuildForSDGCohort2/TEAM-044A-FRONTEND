import React from "react";

const LoginContainer = (props) => {
  return (
    <div className="container-fluid mt-5">
      <div className="justify-content-center">{props.children}</div>
    </div>
  );
};

export default LoginContainer;
