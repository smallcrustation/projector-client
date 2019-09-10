import React from 'react'
import accounting from 'accounting'

import './PaymentsList.css'

export default class PaymentsList extends React.Component {

  render() {
    return (
      <div className="PaymentsList">
        <h3>Payments</h3>
        <section>
          <ul>
            <li>Payment 1: {accounting.formatMoney(100)}</li>
            <li>Payment 2: {accounting.formatMoney(200)}</li>
            <li>Payment 3: {accounting.formatMoney(200)}(pending)</li>
          </ul>
          <button onClick={this.props.onClickNewPaymentRequest}>New Payment Request</button>
        </section>
      </div>
    )
  }
}
