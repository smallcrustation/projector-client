import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'

export default class Landing extends React.Component {
  state = {accountCreated: false}

  onSuccessfulLogin = () => {
    this.setState({accountCreated: false})
    return this.props.history.push('/projects')
  }

  componentDidMount(){
    if(this.props.location.state){
      this.setState({accountCreated: true})
    }
  }

  render() {
    console.log(this.props.location.state)
    console.log(this.state.accountCreated)
    return (
      <div className="LoginPage">
        {this.state.accountCreated?<h2 className="success">Account Created! please login</h2>:''}
        <LoginForm onSuccessfulLogin={this.onSuccessfulLogin} />
      </div>
    )
  }
}
