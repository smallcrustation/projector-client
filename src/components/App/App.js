import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import LandingPage from '../../routes/LandingPage/LandingPage'
import CreateAccountPage from '../../routes/CreateAccountPage/CreateAccountPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage'
import NewProjectPage from '../../routes/NewProjectPage/NewProject'
import ProjectPage from '../../routes/ProjectPage/ProjectPage'
import PaymentRequestPage from '../../routes/PaymentRequestPage/PaymentRequestPage'
import NotFound from '../../routes/NotFoundPage/NotFoundPage'
import PrivateRoute from '../utils/PrivateRoute'
import PublicOnlyRoute from '../utils/PublicRoute'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <main className="App__main">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/createAccount'} component={CreateAccountPage}/>
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PrivateRoute path={'/projects'} component={ProjectsPage} />
            <PrivateRoute path={'/newProject'} component={NewProjectPage} />
            <PrivateRoute path={'/project/:id'} component={ProjectPage} />
            <PrivateRoute path={'/paymentRequest'} component={PaymentRequestPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
