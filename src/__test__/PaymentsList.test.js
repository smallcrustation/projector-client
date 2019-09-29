import React from 'react'
import ReactDOM from 'react-dom'

import PaymentsList from '../components/PaymentsList/PaymentsList'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<PaymentsList />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<PaymentsList />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
