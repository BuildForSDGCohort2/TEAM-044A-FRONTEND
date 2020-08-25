import React, { useState } from "react";
import Navbar from "./navbar";
import Sidenav from "./sidenav";
import DashboardMain from "./dashmain";
import Dashboard from "./dashboard";

function App() {
  const date = new Date().toLocaleTimeString();

  return (
    <div>
      <Navbar />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
