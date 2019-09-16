import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'
import {ProjectsListProvider} from './contexts/ProjectsListContext'

ReactDOM.render(
  <BrowserRouter>
    <ProjectsListProvider>
      <App />
    </ProjectsListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
