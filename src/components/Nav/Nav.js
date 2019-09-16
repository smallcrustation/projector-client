import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

import './Nav.css'

export default class Nav extends React.Component {


  

  loggedInNav() {
    return (
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/logout">Logout</Link>
      </div>
    )
  }

  loggedOutNav() {
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
        {TokenService.hasAuthToken() ? this.loggedInNav() : this.loggedOutNav()}
      </nav>
    )
  }
}
