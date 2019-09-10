import React from 'react'

import './CreateAccountForm.css'

export default class Landing extends React.Component {
  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()

    const { username, email, pass, pass2 } = e.target

    this.setState({ error: null })

    if (pass.value !== pass2.value) {
      // remove return when more validation added
      return this.setState({ error: 'Passwords must match!' })
    }

    const newUser = {
      username: username.value,
      email: email.value,
      pass: pass.value
    }

    // AuthApiService.postUser(newUser)......

    console.log('NEW USER CREATED')
    console.log(newUser)

    this.props.onCreateAccountSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form className="CreateAccountForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>

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
      </form>
    )
  }
}
