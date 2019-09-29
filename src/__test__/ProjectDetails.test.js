import React from 'react'
import ReactDOM from 'react-dom'

import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<ProjectDetails />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<ProjectDetails />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
