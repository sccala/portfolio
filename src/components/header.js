import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import styles from '../appStyles.module.css'
import '../App.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      isNavOpen: false,
    }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }
  
  render() {
    return (
      <>
        <Navbar sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" alt="Sunsoo Chung">
              SUNSOO CHUNG
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="navbar-expand-md justify-content-end ml-auto" navbar>
                <NavItem className="pxy-2">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="px-2">
                  <NavLink className="nav-link" to="/skills">
                    Skills
                  </NavLink>
                </NavItem>
                <NavItem className="px-2">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem className="px-2">
                  <NavLink className="nav-link" to="/resume">
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem className="px-2">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    )
  }
}
export default Header
