import React from 'react'
// import config from '../config'

// import projectApiServer from '../services/projects-api-service'

export const ProjectsListContext = React.createContext()

export class ProjectsListProvider extends React.Component{
  state = {
    projectsList: [],
    error: null
  }

  setProjectsList = projectsList => {
    console.log('SETTIN PROJECTS')
    this.setState({projectsList})
  }

  setError = err => {
    this.setState({err})
  }

  clearError = err => {
    this.setState({err})
  }

  render(){
    const value = {
      projectsList: this.state.projectsList,
      error: this.state.error,
      setError: this.setError,
      setProjectsList: this.setProjectsList
    }
    return (
      <ProjectsListContext.Provider value={value}>
        {this.props.children} {/*placeholder for another component */}
      </ProjectsListContext.Provider>
    )
  }
}

export const ProjectsListContextConsumer = ProjectsListContext.Consumer
