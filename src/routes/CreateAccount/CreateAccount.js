import React from 'react'
import {Redirect} from 'react-router-dom'

import CreateAccntForm from '../../components/CreateAccntForm/CreateAccountForm'

export default class Landing extends React.Component{

  onCreateAccountSuccess = () => {
    console.log('REDIRECT TO LOGIN')
    return this.props.history.push('/login')
  }

  render(){
    return (
      <div className='create-accnt-form'>
        <CreateAccntForm 
          onCreateAccountSuccess = {this.onCreateAccountSuccess}
        />
      </div>
    )
  }
}