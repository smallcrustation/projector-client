import React from 'react'
import { Link } from 'react-router-dom'

import './ProjectsList.css'

export default class ProjectsList extends React.Component {
  state = { error: null }

  onClickNewProject = () => {
    console.log('Create Project')
    return this.props.history.push('./CreateProject')
  }

  render() {
    // const { error } = this.state
    return (
      <div className="ProjectsList">
        <h3>Projects</h3>
        <section>
          <ul>
            <li>
              <Link to="/project/1">Project 1</Link>
            </li>
            <li>
              <Link to="/project/2">Project 2</Link>
            </li>
            <li>
              <Link to="/project/3">Project 3</Link>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}
