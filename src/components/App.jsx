import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar/navbar";
import LandingPage from "./Landing/landing";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Dashboard from "./Dashboard/index";
import Footer from "./Footer/footer";
import AuthState from "../context/auth/authState";
import AlertState from "../context/alert/alertState";

function App() {
  return (
    <AuthState>
      <AlertState>
        <main>
          <header>
            <Navbar />
          </header>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>

          <div className="">
            <Footer />
          </div>
        </main>
      </AlertState>
    </AuthState>
  );
}

export default App;
