import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import styles from '../appStyles.module.css'

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
        <Navbar sticky="top" expand="md" >
          <NavbarBrand className="navbar-expand-md mr-auto" alt="Sunsoo Chung portfolio">
            Sunsoo Chung
          </NavbarBrand>
          <NavbarToggler className={styles.navbarToggle} onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="navbar-expand-md ml-auto" navbar>
              <NavItem>
                <NavLink className={styles.navmenu} to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navmenu} to="/skills">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navmenu} to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navmenu} to="/resume">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navmenu} to="/contact">
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
