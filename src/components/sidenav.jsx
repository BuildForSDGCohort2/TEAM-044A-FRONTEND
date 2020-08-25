import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Dashboard from "./dashboard";
import Transactions from "./transactions";
import Disputes from "./disputes";
import Settings from "./settings";

export default function Sidenav(props) {
  return (
    <Router>
      <div className={props.className}>
        <div className="brand-logo">Brand Logo</div>

        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/disputes">Disputes</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>

      <Switch>
        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        <Route path="/transactions" exact={true}>
          <Transactions className=" main-board" />
        </Route>
        <Route path="/disputes" exact={true}>
          <Disputes className=" main-board" />
        </Route>
        <Route path="/settings" exact={true}>
          <Settings className=" main-board" />
        </Route>
      </Switch>
    </Router>
  );
}
