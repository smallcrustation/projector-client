import React from 'react'

import ProjectsList from '../../components/ProjectsList/ProjectsList'

import './ProjectsPage.css'


export default class ProjectsPage extends React.Component {
  state = { error: null }

  onClickNewProject = () => {
    console.log('Create Project')
    return this.props.history.push('./newProject')
  }

  render() {
    // const { error } = this.state
    return (
      <div className="ProjectsPage">
        <button onClick={this.onClickNewProject}>New Project</button>
          <ProjectsList />
      </div>
    )
  }
}
