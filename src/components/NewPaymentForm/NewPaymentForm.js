import React from 'react'
import PaymentsApiService from '../../services/payments-api-service'
import { ProjectContext } from '../../contexts/ProjectContext'
import { formatMoney } from 'accounting'
import { thisTypeAnnotation } from '@babel/types'

export default class NewPaymentForm extends React.Component {
  static contextType = ProjectContext
  state = { error: null, amount_format: '' }

  handleFormatCurrency = e => {
    console.log((e.target.value))
    this.setState({amount_format: this.state.amount_format + e.target.value})
    console.log((this.state.amount_format))
  }

  handleSubmit = async e => {
    e.preventDefault()
    const payment_amount = e.target.payment.value
    e.target.payment.value = ''

    const newPayment = {
      payment_number: this.context.payments
        ? this.context.payments.length + 1
        : 1,
      total_amount: payment_amount,
      project_id: this.context.project.id
    }

    console.log(newPayment)

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
    return (
      <div className="NewPaymentForm">
        {!this.context.project ? (
          ''
        ) : (
          <h3>{this.context.project.project_name}</h3>
        )}
        <h3>Payment Request</h3>
        <form onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <label htmlFor="payment">Amount</label>
          <input
            onChange={this.handleFormatCurrency}
            type="text"
            id="payment"
            name="payment"
            placeholder="$241.00"
            value={this.state.amount_format}
          />

          <input type="submit" value="Submit Payment" />
        </form>
      </div>
    )
  }
}
