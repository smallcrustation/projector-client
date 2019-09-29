import React from 'react'
import ReactDOM from 'react-dom'

import ProjectsList from '../components/ProjectsList/ProjectsList'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<ProjectsList />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<ProjectsList />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
