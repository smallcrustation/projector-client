import React from 'react'
// import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'


import { ProjectsListContextConsumer } from '../../contexts/ProjectsListContext'
import { ProjectsListContext } from '../../contexts/ProjectsListContext'
import ProjectsApiService from '../../services/projects-api-service'

import './ProjectsList.css'

export default class ProjectsList extends React.Component {
  static contextType = ProjectsListContext

  state = { loading: false }

  // onClickNewProject = () => {
  //   console.log('Create Project')
  //   return this.props.history.push('./CreateProject')
  // }

  onClickRemove = async (e, project_id) => {
    e.stopPropagation()
    // console.log('Remove Project')
    // console.log(project_id)
    try {
      this.setState({ loading: true })
      await ProjectsApiService.removeProjectById(project_id)
      const projectsList = await ProjectsApiService.getProjects()
      this.context.setProjectsList(projectsList)
      this.setState({ loading: false })
    } catch(err) {
      this.setState({ loading: false })
      this.context.setError(err)
    }
  }

  async componentDidMount() {
    // console.log(this.context)
    this.setState({ loading: true })
    this.context.clearError()
    try {
      const projectsList = await ProjectsApiService.getProjects()
      // console.log('project list: ', projectsList)
      this.context.setProjectsList(projectsList)
      this.setState({ loading: false })
    } catch (err) {
      this.setState({ loading: false })
      this.context.setError(err)
    }
  }

  render() {
    const { loading } = this.state
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
                if (loading) {
                  return <h2 className="loading-dots">Loading</h2>
                }
                if (value.projectsList < 1) {
                  return (
                    <p>
                      No Projects
                      <br />
                      Click New Project to make your first project!
                    </p>
                  )
                }
                return value.projectsList.map(project => {
                  // console.log(project.project_name)
                  return (

                      <li className="ProjectsList__li" key={project.id} onClick={()=>this.props.onClickProject(project.id)}>
                        <div className="ProjectsList-trash"
                          onClick={(e) => this.onClickRemove(e, project.id)}
                        >
                       
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100%"
                            height="100%"
                          >
                            <path fill="white" d="M6 4H18V21H6z" />
                            <path d="M11 18H9V7h2V18zM15 18h-2V7h2V18zM4 3H20V5H4z" />
                            <path d="M17 5L14 2 10 2 7 5z" />
                            <path d="M17,22H7c-1.1,0-2-0.9-2-2V3h14v17C19,21.1,18.1,22,17,22z M7,5v15h10V5H7z" />
                          </svg>
                      
                        </div>
                        <div>{project.project_name}</div>
                      </li>
              
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
