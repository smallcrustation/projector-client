import React from 'react'
import accounting from 'accounting'

// import { ProjectContextConsumer } from '../../contexts/ProjectContext'
import { ProjectContext } from '../../contexts/ProjectContext'

import './PaymentsList.css'

export default class PaymentsList extends React.Component {
  static contextType = ProjectContext

  renderPayments() {
    const payments = this.context.payments

    if (this.props.loading) return <p className="loading-dots">Loading</p>
    if (payments.length < 1)
      return (
        <p>
          No Payments
          <br />
          <br />
          click 'New Payment Request'
        </p>
      )

    return (
      <table id="PaymentsList__table">
        <tbody>
          {payments.map((payment, i) => {
            // console.log(payment)
            return (
              <tr key={payment.id}>
                <td>Payment {payment.payment_number}: </td>
                <td>
                  {accounting.formatMoney(payment.total_amount)}
                  {/* (pending) is a quick fix for the last payment, later needs to toggle  */}
                  {payments.length - 1 === i ? '(pending)' : ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  render() {
    // let content = this.renderPayments()

    return (
      <div className="PaymentsList">
        <h3>Payments</h3>
        <section>
          {this.renderPayments()}
          <button
            className="PaymentsList__btn"
            onClick={this.props.onClickNewPaymentRequest}
          >
            New Payment Request
          </button>
        </section>
      </div>
    )
  }
}
