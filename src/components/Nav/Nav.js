import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import { UserContext } from '../../contexts/UserContext'

import './Nav.css'

export default class Nav extends React.Component {
  static contextType = UserContext

  handleLogOut = () => {
    TokenService.clearAuthToken()
    this.context.setUser(null)
  }

  renderLoggedInNav() {
    // console.log('Nav State: ', this.state)
    return (
      <nav className="logged-in-nav nav-bar">
        <Link className="link-btn" to="/projects">
          Projects
        </Link>
        <Link className="link-btn" onClick={this.handleLogOut} to="/">
          Logout
        </Link>
      </nav>
    )
  }

  renderLoggedOutNav() {
    return (
      <nav className="logged-out-nav nav-bar">
        <Link className="link-btn" to="/login">
          Login
        </Link>
        <Link className="link-btn" to="/createAccount">
          Create
        </Link>
      </nav>
    )
  }

  render() {
    return (
      // <nav className="nav-bar">
      TokenService.getAuthToken()
        ? this.renderLoggedInNav()
        : this.renderLoggedOutNav()
      // </nav>
    )
  }
}
