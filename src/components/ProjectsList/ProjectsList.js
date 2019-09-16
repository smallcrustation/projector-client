import React from 'react'
// import { Link } from 'react-router-dom'

import { ProjectsListContextConsumer } from '../../contexts/ProjectsListContext'
import { ProjectsListContext } from '../../contexts/ProjectsListContext'
import TokenService from '../../services/token-service'
// import ProjectsApiService from '../../services/projects-api-service'

import './ProjectsList.css'

export default class ProjectsList extends React.Component {
  static contextType = ProjectsListContext

  state = { error: null }

  onClickNewProject = () => {
    console.log('Create Project')
    return this.props.history.push('./CreateProject')
  }

  componentDidMount() {
    console.log(this.context)
    // try{
    //   const projectsList = await ProjectsApiService.getProjects()
    //   console.log('project list: ', projectsList)
    //   this.context.setProjectsList(projectsList)
    // } catch(err) {
    //   this.context.setError(err)
    // }

    fetch('http://localhost:8000/api/projects/', {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(projectList => this.context.setProjectsList(projectList))
  }

  render() {
    // const { error } = this.state
    return (
      <div className="ProjectsList">
        <h3>Projects</h3>
        <section>
          <ul>
            <ProjectsListContextConsumer>
              {value => {
                console.log('consumer value: ', value.projectsList)
                return value.projectsList.map((project) => {
                  console.log(project.project_name)
                  return <li key={project.id}>{project.project_name}</li>
                })
              }}
            </ProjectsListContextConsumer>
          </ul>
        </section>
      </div>
    )
  }
}
