import React from 'react'
import { Link } from 'react-router-dom'

import { ProjectsListContextConsumer } from '../../contexts/ProjectsListContext'
import { ProjectsListContext } from '../../contexts/ProjectsListContext'
import ProjectsApiService from '../../services/projects-api-service'

import './ProjectsList.css'

export default class ProjectsList extends React.Component {
  static contextType = ProjectsListContext

  // state = { error: null }

  onClickNewProject = () => {
    // console.log('Create Project')
    return this.props.history.push('./CreateProject')
  }

  async componentDidMount() {
    // console.log(this.context)
    this.context.clearError()
    try {
      const projectsList = await ProjectsApiService.getProjects()
      // console.log('project list: ', projectsList)
      this.context.setProjectsList(projectsList)
    } catch (err) {
      this.context.setError(err)
    }
  }

  render() {
    // const { error } = this.state
    return (
      <div className="ProjectsList">
        <h3 className="ProjectsList__header">Projects</h3>
        <section>
          <ul className="ProjectsList__ul">
            <ProjectsListContextConsumer>
              {value => {
                if (value.error) {
                  return (
                    <div role="alert">
                      {value.error && <p className="error">{value.error}</p>}
                    </div>
                  )
                }
                if (!value.projectsList) {
                  return <p>Loading...</p>
                }
                if (value.projectsList < 1) {
                  return <p>No Projects<br/>Click New Project to make your first project!</p>
                }
                return value.projectsList.map(project => {
                  // console.log(project.project_name)
                  return (
                    <Link to={`/projects/${project.id}`} key={project.id}>
                      <li className="ProjectsList__li">
                        {project.project_name}
                      </li>
                    </Link>
                  )
                })
              }}
            </ProjectsListContextConsumer>
          </ul>
        </section>
      </div>
    )
  }
}
