import React from 'react'

export default class NewPaymentForm extends React.Component{

  handleSubmit = e => {
    e.preventDefault()
    
    console.log('SUBMIT PAYMENT')
    this.props.onSuccessfulPayment()
  }

  render(){
    return(
      <div className="NewPaymentForm">
        <h3>Payment Request</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="payment">Amount</label>
          <input type="currency" id="payment" name="payment"/>
          
          <input type="submit" value="Submit Payment" />
        </form>
      </div>
    )
  }
}