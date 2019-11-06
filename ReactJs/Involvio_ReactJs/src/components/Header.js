import React, { Component, Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import logo from "../assets/images/Involvio_Black.svg";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          color="light"
          light
          expand="md"
          style={{ height: "10ex", position: "relative" }}
        >
          <NavbarBrand href="/">
            {/* Involvio */}
            <img src={logo} />
          </NavbarBrand>

          <Nav>
            <NavItem>
              <NavLink href="../MyApp.js" style={{ color: "#17a2b8" }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ color: "#17a2b8" }}>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <Button outline color="info" href="https://us.involvio.com/login">
                Login
              </Button>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Compliance</DropdownItem>
                <DropdownItem>Blog</DropdownItem>
                {/* <DropdownItem divider /> */}
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>OrientationKit</DropdownItem>
                <DropdownItem>CampusKit</DropdownItem>
                <DropdownItem>AttendanceKit</DropdownItem>
                <DropdownItem>RetainAI</DropdownItem>
                <DropdownItem>SafetyKit</DropdownItem>
                {/* <DropdownItem divider /> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;
