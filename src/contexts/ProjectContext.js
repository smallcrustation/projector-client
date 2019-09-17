import React from 'react'

export const ProjectContext = React.createContext()

export class ProjectProvider extends React.Component {
  state = {
    project: null,
    error: null
  }

  setProject = project => {
    this.setState({ project })
  }

  setError = err => {
    this.setState({ err })
  }

  clearError = err => {
    this.setState({ err })
  }

  render() {
    const value = {
      project: this.state.project,
      error: this.state.error,
      setError: this.setError,
      setProject: this.setProject
    }
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children} {/*placeholder for another component */}
      </ProjectContext.Provider>
    )
  }
}

export const ProjectContextConsumer = ProjectContext.Consumer
