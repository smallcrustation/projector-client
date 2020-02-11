import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

import { UserContext } from '../../contexts/UserContext'
import Loading from '../Loading/Loading'

export default class Landing extends React.Component {
  static contextType = UserContext
  state = { error: null, loading: false }

  handleSubmit = async e => {
    this.setState({ loading: true })
    e.preventDefault()
    const { username, pass } = e.target

    const loginCredentials = {
      username: username.value,
      password: pass.value
    }

    try {
      // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
      const user = await AuthApiService.login(loginCredentials)
      // console.log(res.authToken)
      TokenService.saveAuthToken(user.authToken)
      this.context.setUser('logged in')
      // console.log('LOGIN SUCCESS')
      this.setState({ error: null, loading: false })
      this.props.onSuccessfulLogin()
    } catch (err) {
      // console.log(err)
      this.setState({error: err.error, loading: false})
      // this.setState({ error: err.error, loading: false })
    }
  }

  render() {
    const { error, loading } = this.state
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        {loading ? (
          <div><Loading /></div>
        ) : (
          <div>
            <label htmlFor="username" >Username</label>
            <input type="text" id="username" name="username" maxLength="25" required />

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass" maxLength="25" required />

            <input type="submit" value="Login" />
          </div>
        )}
      </form>
    )
  }
}
