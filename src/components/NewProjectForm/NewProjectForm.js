import React from 'react'
import NumberFormat from 'react-number-format'

import ProjectsApiService from '../../services/projects-api-service'

export default class NewProjectForm extends React.Component {
  state = { error: null }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ error: null })

    const { project_name, location, budget } = e.target
    const newProject = {
      project_name: project_name.value,
      location: location.value,
      budget_original: budget.value.replace(/[$,]/g, '')
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const savedProject = await ProjectsApiService.postProjects(newProject)
      project_name.value = ''
      location.value = ''
      budget.value = ''
      // console.log(savedProject)
      this.props.onSuccessfulProject()
    } catch (err) {
      this.setState({ error: err.error })
    }
  }

  render() {
    const { error } = this.state
    return (
      <div className="NewProjectForm">
        <h3 className="low-header">New Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>

          <label htmlFor="project_name">Project Name</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            maxLength="15"
            required
          />

          <label htmlFor="location">Location</label>
          <input
            type="address"
            id="location"
            name="location"
            maxLength="25"
            required
          />

          <label htmlFor="budget">Budget</label>
          <NumberFormat
            isAllowed={values => {
              const { formattedValue, floatValue } = values
              return formattedValue === '' || floatValue <= 10000000000
            }}
            name="budget"
            id="budget"
            className="dollar-input"
            placeholder="$0.00"
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            fixedDecimalScale={2}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
