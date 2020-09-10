import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/navbar";
import LandingPage from "./pages/Landing/landing";
import Login from "./auth//Login/Login";
import Signup from "./auth/Signup/Signup";
import Dashboard from "./pages/Dashboard/index";
import Footer from "./layouts/Footer/footer";
import AuthState from "../context/auth/authState";
import PrivateRoute from "./routing/PrivateRoute";
import "./App.css";

function App() {
  return (
    <AuthState>
      <main>
        <header>
          <Navbar />
        </header>

        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>

        <div className="">
          <Footer />
        </div>
      </main>
    </AuthState>
  );
}

export default App;
