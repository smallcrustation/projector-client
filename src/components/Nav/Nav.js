import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <Link to="/projects">
            <li>Projects</li>
          </Link>

          <Link to="/login">
            <li>Login</li>
          </Link>

          <Link to="/createAccount">
            <li>Create</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
