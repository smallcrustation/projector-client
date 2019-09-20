import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

import {UserContext} from '../../contexts/UserContext'

export default class Landing extends React.Component {
  static contextType = UserContext
  state = { error: null }

  handleSubmit = async e => {
    e.preventDefault()
    const { username, pass } = e.target

    const loginCredentials = {
      username: username.value,
      password: pass.value
    }

    try{
      // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
      const user = await AuthApiService.login(loginCredentials)
      // console.log(res.authToken)
      TokenService.saveAuthToken(user.authToken)
      this.context.setUser('logged in')
      // console.log('LOGIN SUCCESS')
      this.props.onSuccessfulLogin()

    } catch(err) {
      this.setState({error: err.error})
      // console.log('LOGIN ERROR')
    }
  }


  render() {
    const { error } = this.state
    return (
      <form className='LoginForm' onSubmit={this.handleSubmit}>
        <div role="alert">
          { error && <p className='error'>{error}</p>}
        </div>

        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' required/>

        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' name='pass' required/>

        <input type="submit" value="Login" />
      </form>
    )
  }
}
