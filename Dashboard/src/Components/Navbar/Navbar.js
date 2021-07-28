import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link
          to="/"
          className="ml-5 navbar-brand"
          style={{ marginLeft: "100px" }}
        >
          DashBoard
        </Link>
        <div
          className="collpase navbar-collapse"
          style={{ marginLeft: "50px" }}
        >
          <ul className="container navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/users" className="nav-link">
                Employees
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/customers" className="nav-link">
                Customers
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/vehicles" className="nav-link">
                Vehicles
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/machines" className="nav-link">
                Machines
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/sales" className="nav-link">
                Sales
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/agents" className="nav-link">
                Agents
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/shippers" className="nav-link">
                Shippers
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to={{ pathname: "//localhost/messages" }}
                target="_parent"
                className="nav-link"
              >
                Messages
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to={{ pathname: "//localhost:4008" }}
                target="_parent"
                className="nav-link"
                style={{ marginLeft: "500px" }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
