import React from 'react'

import './CreateAccountForm.css'

export default class Landing extends React.Component {
  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()

    const { user_name, email, pass, pass2 } = e.target

    this.setState({ error: null })

    if (pass.value !== pass2.value) {
      // remove return when more validation added
      return this.setState({ error: 'Passwords must match!' })
    }

    const newUser = {
      user_name: user_name.value,
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
      <form onSubmit={this.handleSubmit}>
        <div role="alert">
          { error && <p className='error'>{error}</p>}
        </div>

        <label htmlFor="user_name">Username</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="pass" required />

        <label htmlFor="pass2">Confirm Password</label>
        <input type="password" id="pass2" name="pass2" required />

        <input type="submit" value="Create Account!" required />
      </form>
    )
  }
}
