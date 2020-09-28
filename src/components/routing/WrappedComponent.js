import React from "react";
import { Route, Redirect } from "react-router-dom";

const WrappedComponent = ({ component: Component, ...rest }) => {
  const loggedInUser = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedInUser ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default WrappedComponent;
