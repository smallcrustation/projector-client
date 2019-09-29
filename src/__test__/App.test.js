import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from '../components/App/App'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    )

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
