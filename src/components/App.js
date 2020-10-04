import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/navbar";
import LandingPage from "./pages/Landing/landing";
import Login from "./auth/Login/Login";
import Signup from "./auth/Signup/Signup";
import Footer from "./layouts/Footer/footer";
import AuthState from "../context/auth/authState";
import TransactionState from "../context/transactions/transactionState";
import DisputeState from "../context/disputes/disputeState";
import WalletState from "../context/wallets/walletState";
import Email from "./pages/Email/Email";
import PrivateRoute from "./routing/PrivateRoute";
import setAuthToken from "../utils/token";
import "./App.css";
import Home from "./pages/Home/Home";
import ErrorBoundary from "./ErrorBoundary/Error";
import VerifyEmail from "./pages/Email/VerifyEmail";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // useEffect(() => {
  //   // manageSession();
  //   // window.onunload = function () {
  //   //   localStorage.clear();
  //   // };
  //   //eslint-disable-next-line
  // }, []);
  return (
    <AuthState>
      <TransactionState>
        <WalletState>
          <DisputeState>
            <ErrorBoundary>
              <Navbar />
            </ErrorBoundary>
            <Switch>
              <PrivateRoute path="/dashboard" component={Home} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/email/verify/:token" component={Email} />
              <Route exact path="/verify" component={VerifyEmail} />
            </Switch>
          </DisputeState>
          <Footer />
        </WalletState>
      </TransactionState>
    </AuthState>
  );
};

export default App;
