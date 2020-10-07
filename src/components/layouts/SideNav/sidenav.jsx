import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";

export default function Sidenav() {
  return (
    <main className="side-nav rounded side--nav">
      <div className="brand">
        <h2 className="text-light">MG</h2>
      </div>
      <nav className="nav side-nav">
        <ul className="list-unstyled">
          <div className="nav-container">
            <Link to="/dashboard">
              <i className="fas fa-tachometer-alt"></i> Overview
            </Link>
          </div>
          <li>
            <Link to="/dashboard/transactions" className="link">
              <i className="fas fa-money-bill-wave"></i> Transactions
            </Link>
          </li>
          <li>
            <Link to="/dashboard/confirm-delivery">
              <i className="fas fa-truck"></i> Confirm Delivery
            </Link>
          </li>
          <li>
            <Link to="/dashboard/disputes">
              <i className="fas fa-users"></i> Disputes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/wallet">
              <i className="fas fa-cogs"></i> Wallet
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
