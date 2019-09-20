import React from 'react'
import {Link} from 'react-router-dom'

import './LandingPage.css'

export default class Landing extends React.Component{

  render(){
    return (
      <section className='LandingPage'>
        <h3 className='LandingPage__h3'>Welcome to Projector</h3>
        <article>
          <p>If this is your first time using the app please click 'Create'</p>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/createAccount"><button>Create</button></Link>
        </article>
      </section>
    )
  }
}