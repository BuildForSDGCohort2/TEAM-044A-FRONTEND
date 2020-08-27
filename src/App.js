import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>

      <div className="">
        <Footer />
      </div>
    </main>
  );
}

export default App;
