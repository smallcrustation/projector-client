import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Nav from '../components/Nav/Nav'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
      div
    )

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
