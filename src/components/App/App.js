import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Landing from '../../routes/LandingPage/LandingPage'
import CreateAccount from '../../routes/CreateAccountPage/CreateAccountPage'
import Login from '../../routes/LoginPage/LoginPage'
import NotFound from '../../routes/NotFoundPage/NotFoundPage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <main className="App__main">
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route exact path={'/createAccount'} component={CreateAccount} />
            <Route exact path={'/login'} component={Login} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
