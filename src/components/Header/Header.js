import React from 'react'
import {Link} from 'react-router-dom'

import Nav from '../Nav/Nav'

import './Header.css'

export default class Header extends React.Component{


  render(){
    return (
      <header className="Header">
        <Link to='/' className="Header__h1"><h1 className="Header__h1">Projector</h1></Link>
        <Nav />
      </header>
    )
  }
}