import React, { useContext, useEffect } from "react";
import Dashboard from "../Dashboard";
import AuthContext from "../../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
