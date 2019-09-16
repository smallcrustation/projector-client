import React from 'react'

import ProjectsApiService from '../../services/projects-api-service'

export default class NewProjectForm extends React.Component {
  state = {error: null}

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({error: null})

    const { project_name, location, budget } = e.target
    const newProject = {
      project_name: project_name.value,
      location: location.value,
      budget_original: budget.value
    }

    try {
      const savedProject = await ProjectsApiService.postProjects(newProject)
      project_name.value = ''
      location.value = ''
      budget.value = ''
      console.log(savedProject)
      this.props.onSuccessfulProject()
    } catch (err) {
      this.setState({ error: err.error })
    }
  }

  render() {
    const {error} = this.state
    return (
      <div className="NewProjectForm">
        <h3>New Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>

          <label htmlFor="project_name">Project Name</label>
          <input type="text" id="project_name" name="project_name" required/>

          <label htmlFor="location">Location</label>
          <input type="address" id="location" name="location" />

          <label htmlFor="budget">Budget</label>
          <input type="currency" id="budget" name="budget" required/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
