import React from 'react'

import ProjectsList from '../../components/ProjectsList/ProjectsList'

import './ProjectsPage.css'


export default class ProjectsPage extends React.Component {
  state = { error: null }

  onClickNewProject = () => {
    // console.log('Create Project')
    return this.props.history.push('./newProject')
  }

  onClickProject = (id) => {
    return this.props.history.push(`/projects/${id}`)
  }

  render() {
    // const { error } = this.state
    return (
      <div className="ProjectsPage">
        <button className="ripple" onClick={this.onClickNewProject}>New Project</button>
          <ProjectsList 
            onClickProject={this.onClickProject}
          />
      </div>
    )
  }
}
