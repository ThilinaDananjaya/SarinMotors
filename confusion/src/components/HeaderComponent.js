import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div >
                <Navbar dark expand="md">
                    <div className="container" id="navi">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/inventory'><span className="fa fa-list fa-lg"></span> Inventory</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className="mb-5">
                    <div className="container mb-5">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>CS CAR SALES</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a neque lacinia, volutpat nunc sed, vehicula ipsum. Phasellus gravida euismod ert. felis commodo scelerisque sit amet ut mi. Proin ultricies interdum felis, sed varius ex interdum in. Quisque vel erat in justo laoreet luctus. Duis neque justo, fermentum sed justo non, viverra egestas augue. Sed in mi bibendum, elementum tellus eu, consequat ipsum.

</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            
                           <img className="img-fluid" src="\assets\carsaleimg\bmw.png" alt="bmw car"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;