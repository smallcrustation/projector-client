import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <Link to='/login'>
            <li>Login</li>
          </Link>
          <Link to='/create-account'>
            <li>Create</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
