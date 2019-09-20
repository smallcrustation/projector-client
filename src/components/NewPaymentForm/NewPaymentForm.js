import React from 'react'
import PaymentsApiService from '../../services/payments-api-service'
import { ProjectContext } from '../../contexts/ProjectContext'
import NumberFormat from 'react-number-format'

import './NewPaymentForm.css'

export default class NewPaymentForm extends React.Component {
  static contextType = ProjectContext
  state = { error: null }

  handleSubmit = async e => {
    e.preventDefault()

    const payment_amount = e.target.payment.value.replace(/[$,]/g, '')
    e.target.payment.value = ''

    const newPayment = {
      payment_number: this.context.payments
        ? this.context.payments.length + 1
        : 1,
      total_amount: payment_amount,
      project_id: this.context.project.id
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const madePayment = await PaymentsApiService.postPayment(newPayment)
      this.props.onSuccessfulPayment()
    } catch (err) {
      this.setState({ error: err.error })
    }
  }

  render() {
    const error = this.state.error
    // ADD if else to go back to projects if !this.context.project
    return (
      <div className="NewPaymentForm">
        {!this.context.project ? (
          ''
        ) : (
          <h3 className="low-header">{this.context.project.project_name}</h3>
        )}
        <h3>Payment Request</h3>
        <form className="NewPaymentForm__form" onSubmit={this.handleSubmit}>
          <div role="alert">{error &&<p className="error">{error}</p>}</div>
          <label htmlFor="payment" className="NewPaymentForm__label">
            Amount
          </label>
          <NumberFormat
            name="payment"
            id="payment"
            className="dollar-input"
            placeholder="$0.00"
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            fixedDecimalScale={2}
            required
          />

          <input type="submit" value="Submit Payment" />
        </form>
      </div>
    )
  }
}
