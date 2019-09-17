import React from 'react'

export const ProjectContext = React.createContext()

export class ProjectProvider extends React.Component {
  state = {
    project: null,
    payments: null,
    error: null
  }

  setProject = project => {
    this.setState({ project })
  }

  setPayments = payments => {
    this.setState({ payments })
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
      payments: this.state.payments,
      error: this.state.error,
      setError: this.setError,
      setProject: this.setProject,
      setPayments: this.setPayments
    }
    console.log('PROJECT CONTEXT')
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children} {/*placeholder for another component */}
      </ProjectContext.Provider>
    )
  }
}

export const ProjectContextConsumer = ProjectContext.Consumer
