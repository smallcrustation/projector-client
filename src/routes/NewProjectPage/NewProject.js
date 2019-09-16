import React from 'react'

import NewProjectForm from '../../components/NewProjectForm/NewProjectForm'

export default class NewProjectPage extends React.Component{

  onSuccessfulProject = () => {
    console.log('Project Submitted Successfully')
    return this.props.history.push('/projects')
  }

  render(){
    return(
      <div className="NewProjectsPage">
        <section>
          <NewProjectForm
            onSuccessfulProject={this.onSuccessfulProject}
          />
        </section>
      </div>
    )
  }
}