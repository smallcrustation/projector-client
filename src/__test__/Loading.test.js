import React from 'react'
import ReactDOM from 'react-dom'

import Loading from '../components/Loading/Loading'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Loading />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<Loading />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
