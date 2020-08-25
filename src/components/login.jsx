import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Button from "./button";

export default function Login() {
  return (
    <div>
      This is the Login page
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link className="nav-link" to="/dashboard">
            <Button
              className="btn btn-primary btn-large btn-block"
              text="Login"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
