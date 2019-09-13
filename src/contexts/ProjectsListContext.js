import React from 'react'

// null project?

const ProjectsListContext = React.createContext()

export default ProjectsListContext

export class ProjectsListProvider extends React.Component{
  state = {
    projectsList: [],
    error: null
  }

  setProjectList = projectsList => {
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
      setError: this.state.setError,
      setThingList: this.setThingList
    }
    return (
      <ProjectsListProvider value={value}>
        {this.props.children}
      </ProjectsListProvider>
    )
  }
  
}