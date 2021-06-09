import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container" id="navi">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.jpg"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/inventory">
                    <span className="fa fa-list fa-lg"></span> Inventory
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    <span className="fa fa-address-card fa-lg"></span> Sign In
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron className="mb-5">
          <div className="container mb-5">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <br />
                <br />
                <h1>SARIN MOTORS</h1>
                <div className="des">
                  <p>
                    <br />
                    &nbsp;&nbsp;GET THE BRAND NEW VEHICLES AND
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MACHINES AT FAIR PRICES<br /><br /><br />
                  </p>
                </div>
              </div>
              {/* <div className="col-12 col-sm-6">
                <img
                  className="im-fluid"
                  src="\assets\carsaleimg\Honda-CR-V-TPMS.png"
                  alt=""
                />
              </div> */}
              <div className="col-12 col-sm-6">
                <img
                  className="img-fluid"
                  src="\assets\carsaleimg\bmw.png"
                  alt="bmw car"
                />
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
