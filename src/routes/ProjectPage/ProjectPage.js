import React from 'react'

import ProjectDetails from '../../components/ProjectDetails/ProjectDetails'
import PaymentsList from '../../components/PaymentsList/PaymentsList'
import ProjectsApiServer from '../../services/projects-api-service'
import { ProjectContext } from '../../contexts/ProjectContext'

export default class ProjectPage extends React.Component {
  static contextType = ProjectContext
  state = {loading: true}

  onClickNewPaymentRequest = () => {
    // console.log('NEW PAYMENT REQUEST')
    return this.props.history.push('/paymentRequest')
  }

  async componentDidMount() {
    this.setState({loading: true})
    const project_id = this.props.match.params.id
    try {
      const project = await ProjectsApiServer.getProjectById(project_id)
      const payments = await ProjectsApiServer.getProjectPayments(project_id)
      // console.log('PAYMENTS :', payments)
      this.context.setProject(project)
      this.context.setPayments(payments)
      this.setState({loading: false})
    } catch (err) {
      // console.log(err)
      this.setState({loading: false})
      this.context.setError(err)
    }
    
  }

  render() {
    return (
      <div className="ProjectPage">
        <section>
          <ProjectDetails 
            loading={this.state.loading}
          />
          <PaymentsList
            onClickNewPaymentRequest={this.onClickNewPaymentRequest}
            loading={this.state.loading}
          />
        </section>
      </div>
    )
  }
}
