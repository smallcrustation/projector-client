import React from 'react'

import CreateAccntForm from '../../components/CreateAccountForm/CreateAccountForm'

export default class Landing extends React.Component{

  onCreateAccountSuccess = () => {
    // console.log('REDIRECT TO LOGIN')
    return this.props.history.push('/login')
  }

  render(){
    return (
      <div className='CreateAccountPage'>
        <CreateAccntForm 
          onCreateAccountSuccess = {this.onCreateAccountSuccess}
        />
      </div>
    )
  }
}