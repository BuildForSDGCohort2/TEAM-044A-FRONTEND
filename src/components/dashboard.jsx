import React from "react";
import Sidenav from "./sidenav";
import DashboardMain from "./dashmain";

export default function Dashboard() {
  return (
    <div className=" card dashboard">
      <Sidenav className="navbar container dashboard-sidebar" />
      <DashboardMain className=" main-board" />
    </div>
  );
}
