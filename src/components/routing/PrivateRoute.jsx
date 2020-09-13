/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const loggedInUser = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedInUser || !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
