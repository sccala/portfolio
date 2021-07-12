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
        <Navbar
          light
          sticky="top"
          expand="md"
          style={{
            backgroundColor: 'rgb(255,255,255.0.4)',
            backdropFilter: 'blur(1.5rem)',
            
          }}
        >
          <NavbarBrand href="/" className="navtitle mr-auto">
            SUNSOO CHUNG
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="navmenu navbar-expand-md ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/resume">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
export default Header
