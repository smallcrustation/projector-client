import React from 'react'

import NewProjectForm from '../../components/NewProjectForm/NewProjectForm'

export default class NewProjectPage extends React.Component{

  onSuccessfulProject = () => {
    console.log('Payment Submitted Successfully')
    return this.props.history.goBack()
  }

  render(){
    return(
      <div className="PaymentRequestPage">
        <section>
          <NewProjectForm
            onSuccessfulProject={this.onSuccessfulProject}
          />
        </section>
      </div>
    )
  }
}