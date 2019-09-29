import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
