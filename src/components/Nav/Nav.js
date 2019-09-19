import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

import './Nav.css'

export default class Nav extends React.Component {
  // add a context
  // state = {isLoggedIn: false}

  // checkLogIn(){
  //   if(TokenService.hasAuthToken()){
  //     this.setState({isLoggedIn: true})
  //   }
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState !== this.state){
  //     this.checkLogIn()
  //   }
  // }

  handleLogOut = () => {
    TokenService.clearAuthToken()
  }

  renderLoggedInNav() {
    // console.log('Nav State: ', this.state)
    return (
      <nav className="logged-in-nav nav-bar">
        <Link to="/projects">Projects</Link>
        <Link onClick={this.handleLogOut} to="/">
          Logout
        </Link>
      </nav>
    )
  }

  renderLoggedOutNav() {
    return (
      <nav className="logged-out-nav nav-bar">
        <Link to="/login"><span>Login</span></Link>
        <Link to="/createAccount">Create</Link>
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
