import React from 'react'
import ReactDOM from 'react-dom'

import NewPaymentForm from '../components/NewPaymentForm/NewPaymentForm'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<NewPaymentForm onSuccessfulPayment='' />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<NewPaymentForm onSuccessfulPayment=''/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
