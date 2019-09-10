import React from 'react'

import ProjectDetails from '../../components/ProjectDetails/ProjectDetails'
import PaymentsList from '../../components/PaymentsList/PaymentsList'

export default class ProjectPage extends React.Component{

  onClickNewPaymentRequest = () => {
    console.log('NEW PAYMENT REQUEST')
    return this.props.history.push('/paymentRequest')
  }

  render(){
    return(
      <div className="ProjectPage">
        <section>
          <ProjectDetails />
          <PaymentsList 
            onClickNewPaymentRequest={this.onClickNewPaymentRequest}
          />
        </section>
      </div>
    )
  }
}