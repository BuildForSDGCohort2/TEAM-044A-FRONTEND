import React, { useContext, useEffect } from "react";
import Dashboard from "../Dashboard";
import AuthContext from "../../../context/auth/authContext";
import ErrorBoundary from "../../ErrorBoundary/Error";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
