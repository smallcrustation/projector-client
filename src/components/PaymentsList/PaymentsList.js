import React from 'react'
import accounting from 'accounting'

import { ProjectContextConsumer } from '../../contexts/ProjectContext'

import './PaymentsList.css'

export default class PaymentsList extends React.Component {
  renderPayments() {
    return (
      <ProjectContextConsumer>
        {value => {
          console.log(value.payments)
          if(!value.payments) return <p>Loading...</p>
          if(value.payments.length<1) return <p>No Payments</p>

          return value.payments.map((payment,i) => {
            console.log(payment)
            return (
              <li key={payment.id}>
                Payment {payment.payment_number}:{' '}
                {accounting.formatMoney(payment.total_amount)}
                {/* (pending) is a quick fix for the last payment, later needs to toggle  */}
                {value.payments.length-1===i?'(pending)':''}
              </li>
            )
          })
        }}
      </ProjectContextConsumer>
    )
  }

  render() {

    let content = this.renderPayments()

    return (
      <div className="PaymentsList">
        <h3>Payments</h3>
        <section>
          <ul>
            {content}
          </ul>
          <button onClick={this.props.onClickNewPaymentRequest}>
            New Payment Request
          </button>
        </section>
      </div>
    )
  }
}
