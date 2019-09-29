import React from 'react'
import ReactDOM from 'react-dom'

import CreateAccountForm from '../components/CreateAccountForm/CreateAccountForm'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<CreateAccountForm />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<CreateAccountForm />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
