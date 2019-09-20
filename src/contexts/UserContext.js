import React from 'react'

export const UserContext = React.createContext()

export class UserProvider extends React.Component {
  state = {
    user: null,
    error: null
  }

  setUser = user => {
    console.log('user')
    this.setState({ user })
  }

  setError = err => {
    this.setState({ err })
  }

  clearError = err => {
    this.setState({ err })
  }

  render() {
    const value = {
      user: this.state.User,
      error: this.state.error,
      setError: this.setError,
      setUser: this.setUser
    }
    
    return (
      <UserContext.Provider value={value}>
        {this.props.children} {/*placeholder for another component */}
      </UserContext.Provider>
    )
  }
}

export const UserContextConsumer = UserContext.Consumer
