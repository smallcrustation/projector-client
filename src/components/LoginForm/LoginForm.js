import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

export default class Landing extends React.Component {
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
      const res = await AuthApiService.login(loginCredentials)
      TokenService.saveAuthToken(res.authToken)

      console.log('LOGIN SUCCESS?')
      this.props.onSuccessfulLogin()

    } catch(err) {
      console.log(err)
      console.log('LOGIN ERROR')
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
