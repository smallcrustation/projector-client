import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'

export default class Landing extends React.Component {

  onSuccessfulLogin = () => {
    return this.props.history.push('/projects')
  }

  render() {
    return (
      <div className='LoginPage'>
        <LoginForm 
          onSuccessfulLogin={this.onSuccessfulLogin}
        />
      </div>
    )
  }
}
