import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import {UserContext} from '../../contexts/UserContext'

import './LandingPage.css'

export default class Landing extends React.Component {
  static contextType = UserContext

  handleLogOut = () => {
    TokenService.clearAuthToken()
    this.context.setUser(null)
  }

  render() {
    let content
    if (TokenService.hasAuthToken()) {
      // console.log('HAS AUTH TOKEN')
      content = (
        <article>
          <p className="LandingPage__p">
            You are signed into an account. To create a new project go to
            projects and click 'New Project'.
          </p>
          <Link className="link-btn " to="/" onClick={this.handleLogOut}>
            Logout
          </Link>
          <Link to="/projects" className="link-btn">
            Projects
          </Link>
        </article>
      )
    } else {
      // console.log('NO AUTH TOKEN')
      content = (
        <article>
          <p className="LandingPage__p">
            Projector is an app designed for you to track your project by it's funding.
            <br/>
            If this is your first time using the app please click 'Create' to create an account.
            <br/>
            (demo login user:user pass:password)
          </p>
          <Link className="link-btn" to="/login">
            Login
          </Link>
          <Link to="/createAccount" className="link-btn">
            Create
          </Link>
        </article>
      )
    }
    return (
      <section className="LandingPage">
        <h3 className="LandingPage__h3">Welcome to Projector</h3>
        {content}
      </section>
    )
  }
}
