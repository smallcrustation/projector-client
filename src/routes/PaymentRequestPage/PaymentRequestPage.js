import React from 'react'

import NewPaymentForm from '../../components/NewPaymentForm/NewPaymentForm'

export default class PaymentRequestPage extends React.Component{

  onSuccessfulPayment = () => {
    console.log('Payment Submitted Successfully')
    return this.props.history.goBack()
  }

  render(){
    return(
      <div className="PaymentRequestPage">
        <section>
          <NewPaymentForm
            onSuccessfulPayment={this.onSuccessfulPayment}
          />
        </section>
      </div>
    )
  }
}