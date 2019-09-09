import React from 'react'

export default class Landing extends React.Component {

  handleSubmit = e => {
    e.preventDefault()
    const { username, pass }=e.target

    const loginCredentials = {
      username: username.value,
      password: pass.value
    }

    console.log(loginCredentials)
    this.props.onSuccessfulLogin()
  }


  render() {
    return (
      <form className='LoginForm' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' required/>

        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' name='pass' required/>

        <input type="submit" value="Create Account!" />
      </form>
    )
  }
}
