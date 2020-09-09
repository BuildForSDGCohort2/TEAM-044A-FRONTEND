import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar/navbar";
import LandingPage from "./Landing/landing";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Contact from "./Contact/contact";
import Dashboard from "./Dashboard/index";
import Footer from "./Footer/footer";

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
        <Route path="/contact" component={Contact} />
      </Switch>

      <div className="">
        <Footer />
      </div>
    </main>
  );
}

export default App;
