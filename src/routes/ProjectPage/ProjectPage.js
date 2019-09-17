import React from 'react'

import ProjectDetails from '../../components/ProjectDetails/ProjectDetails'
import PaymentsList from '../../components/PaymentsList/PaymentsList'
import ProjectsApiServer from '../../services/projects-api-service'
import { ProjectContext } from '../../contexts/ProjectContext'

export default class ProjectPage extends React.Component {
  static contextType = ProjectContext

  onClickNewPaymentRequest = () => {
    console.log('NEW PAYMENT REQUEST')
    return this.props.history.push('/paymentRequest')
  }

  async componentDidMount() {
    const project_id = this.props.match.params.id
    try {
      const project = await ProjectsApiServer.getProjectById(project_id)
      const payments = await ProjectsApiServer.getProjectPayments(project_id)
      // console.log('PAYMENTS :', payments)
      this.context.setProject(project)
      this.context.setPayments(payments)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
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
