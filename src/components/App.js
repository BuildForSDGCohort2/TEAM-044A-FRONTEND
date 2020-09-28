import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/navbar";
import LandingPage from "./pages/Landing/landing";
import Login from "./auth/Login/Login";
import Signup from "./auth/Signup/Signup";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./layouts/Footer/footer";
import AuthState from "../context/auth/authState";
import TransactionState from "../context/transactions/transactionState";
import Email from "./pages/Email/Email";
import PrivateRoute from "./routing/PrivateRoute";
import setAuthToken from "../utils/token";
import "./App.css";
import Home from "./pages/Home/Home";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <TransactionState>
        <Navbar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Home} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/confirm/:token" component={Email} />
        </Switch>
        <Footer />
      </TransactionState>
    </AuthState>
  );
};

export default App;
