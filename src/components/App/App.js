import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Landing from '../../routes/Landing/Landing'
import CreateAccount from '../../routes/CreateAccount/CreateAccount'
import NotFound from '../../routes/NotFound/NotFound'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <main className="App__main">
          <Switch>
            <Route 
              exact 
              path={'/'} 
              component={Landing}
             />
             <Route 
              exact
              path={'/create-account'}
              component={CreateAccount}
             />

            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
