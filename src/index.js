import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'
import { ProjectsListProvider } from './contexts/ProjectsListContext'
import { ProjectProvider } from './contexts/ProjectContext'
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProjectsListProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </ProjectsListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
