import React from 'react'
import {Link} from 'react-router-dom'

import Nav from '../Nav/Nav'

import './Header.css'

export default class Header extends React.Component{


  render(){
    return (
      <header>
        <Link to='/'><h1>Projector</h1></Link>
        <Nav />
      </header>
    )
  }
}