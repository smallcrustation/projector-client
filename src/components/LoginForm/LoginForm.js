import React from 'react'

export default class Landing extends React.Component {
  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { username, pass }=e.target

    const loginCredentials = {
      username: username.value,
      password: pass.value
    }

    // AuthApi.Login..... .catch....

    console.log(loginCredentials)
    this.props.onSuccessfulLogin()
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
