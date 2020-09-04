import React from "react";
import { Switch, Route } from "react-router-dom";
import MainDashboard from "./dashboard";
import Sidenav from "../SideNav/sidenav";
import Transactions from "./transactions";
import Disputes from "./disputes";
import Settings from "./settings";
import CreateTransaction from "./create-transaction";
import ConfirmDelivery from "./confirm-delivery";

export default function Dashboard() {
  return (
    <section>
      <div className="row mt-3">
        <div className="col-sm-3">
          <Sidenav />
        </div>
        <div className="col-sm-9">
          <Switch>
            <Route exact path="/dashboard" component={MainDashboard} />
            <Route path="/dashboard/transactions" component={Transactions} />
            <Route
              path="/dashboard/create-transactions"
              component={CreateTransaction}
            />
            <Route path="/dashboard/disputes" component={Disputes} />
            <Route path="/dashboard/settings" component={Settings} />
            <Route
              path="/dashboard/confirm-delivery"
              component={ConfirmDelivery}
            />
          </Switch>
        </div>
      </div>
    </section>
  );
}
