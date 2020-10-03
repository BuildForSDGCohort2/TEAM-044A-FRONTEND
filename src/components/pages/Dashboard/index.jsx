import React from "react";
import { Switch, Route } from "react-router-dom";
import MainDashboard from "./dashboard";
import Sidenav from "../../layouts/SideNav/sidenav";
import Transactions from "../Transactions/Transactions";
import Disputes from "../Disputes/Dispute";
import Settings from "../Settings/Settings";
import TransactionForm from "../Transactions/TransactionForm";
import ConfirmDelivery from "../Delivery/Delivery";
import TransactionItem from "../Transactions/TransactionItem";
import ErrorBoundary from "../../ErrorBoundary/Error";
import DisputeForm from "../Disputes/DisputeForm";
// import AuthContext from "../../../contex/t/auth/authContext";

export default function Dashboard() {
  return (
    <section>
      <div className="row mt-3">
        <div className="col-sm-3">
          <ErrorBoundary>
            <Sidenav />
          </ErrorBoundary>
        </div>
        <div className="col-sm-9">
          <Switch>
            <Route exact path="/dashboard" component={MainDashboard} />
            <Route path="/dashboard/transactions" component={Transactions} />
            <Route
              path="/dashboard/create-transactions"
              component={TransactionForm}
            />
            <Route
              exact
              path="/dashboard/disputes/new-dispute"
              component={DisputeForm}
            />
            <Route exact path="/dashboard/disputes" component={Disputes} />
            <Route rxact path="/dashboard/settings" component={Settings} />
            <Route
              exact
              path="/dashboard/confirm-delivery"
              component={ConfirmDelivery}
            />
            <Route
              exact
              path="/transaction/:reference"
              component={TransactionItem}
            />
          </Switch>
        </div>
      </div>
    </section>
  );
}
