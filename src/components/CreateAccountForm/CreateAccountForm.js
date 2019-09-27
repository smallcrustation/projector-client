import React from 'react'

import AuthApiService from '../../services/auth-api-service'
import Loading from '../Loading/Loading'

import './CreateAccountForm.css'

export default class Landing extends React.Component {
  state = { error: null, loading: false }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ error: null, loading: true })

    const { username, email, pass, pass2 } = e.target

    // Validation... anymore make separate func
    let validErr = null
    if (pass.value !== pass2.value) {
      // remove return when more validation added
      validErr = 'Passwords must match!'
    }

    if (username.value.includes(' ')) {
      validErr
        ? (validErr += '\nUsername cannot contain spaces.')
        : (validErr = 'Username cannot contain spaces.')
    }

    if (validErr) {
      // console.log('valid err')
      this.setState({ loading: false })
      return this.setState({error: validErr})
    }

    const newUser = {
      username: username.value,
      email: email.value,
      password: pass.value
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const savedUser = await AuthApiService.createAccount(newUser)
      username.value = ''
      email.value = ''
      pass.value = ''
      pass2.value = ''
      this.setState({ loading: false })
      this.props.onCreateAccountSuccess()
    } catch (err) {
      this.setState({ error: err.error, loading: false })
    }
  }

  render() {
    const { error, loading } = this.state
    return (
      <form className="CreateAccountForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {' '}
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" name="pass" required />
            </div>
            <div>
              <label htmlFor="pass2">Confirm Password</label>
              <input type="password" id="pass2" name="pass2" required />
            </div>
            <input type="submit" value="Create Account!" />
          </div>
        )}
      </form>
    )
  }
}
