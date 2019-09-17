import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

import './Nav.css'

export default class Nav extends React.Component {
  // add a context

  handleLogOut = () => {
    TokenService.clearAuthToken()
  }

  renderLoggedInNav() {
    return (
      <div className="logged-in-nav">
        <Link to="/projects">Projects</Link>
        <Link onClick={this.handleLogOut} to="/">
          Logout
        </Link>
      </div>
    )
  }

  renderLoggedOutNav() {
    return (
      <div className="logged-out-nav">
        <Link to="/login">Login</Link>
        <Link to="/createAccount">Create</Link>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar">
        {TokenService.getAuthToken()
          ? this.renderLoggedInNav()
          : this.renderLoggedOutNav()}
      </nav>
    )
  }
}
