import React from 'react'
import ReactDOM from 'react-dom'

import NewProjectForm from '../components/NewProjectForm/NewProjectForm'
import renderer from 'react-test-renderer'

describe('App Testing', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<NewProjectForm />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders with no crashing and matches snapshot', () => {
    const tree = renderer.create(<NewProjectForm />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
