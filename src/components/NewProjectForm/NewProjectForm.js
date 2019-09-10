import React from 'react'

export default class NewProjectForm extends React.Component{

  handleSubmit = e => {
    e.preventDefault()
    
    console.log('SUBMIT PROJECT')
    this.props.onSuccessfulProject()
  }

  render(){
    return(
      <div className="NewProjectForm">
        <h3>New Project</h3>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="project_name">Project Name</label>
          <input type="text" id="project_name" name="project_name"/>

          <label htmlFor="location">Location</label>
          <input type="address" id="location" name="location"/>

          <label htmlFor="budget">Budget</label>
          <input type="currency" id="budget" name="budget"/>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}