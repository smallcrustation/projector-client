import React from 'react'
import accounting from 'accounting'

import { ProjectContextConsumer } from '../../contexts/ProjectContext'

import './ProjectDetails.css'

export default class ProjectDetails extends React.Component {
  render() {
    return (
      <div className="ProjectDetails">
        <h3>Details</h3>
        <ProjectContextConsumer>
          {value => {
            console.log(value.project)
            const project = value.project
            if (project) {
              return (
                <section>
                  <ul>
                    <li>
                      Original Project Budget:{' '}
                      {accounting.formatMoney(project.budget_original)}
                    </li>
                    <li>
                      Project Cost Adjustment:{' '}
                      {accounting.formatMoney(project.budget_adjusted)}
                    </li>
                    <li>
                      Project Budget to Date:{' '}
                      {accounting.formatMoney(project.budget_total)}
                    </li>
                  </ul>

                  <ul>
                    <li>
                      Completed to Date:{' '}
                      {accounting.formatMoney(project.total_completed)}
                    </li>
                    <li>
                      Less Previous Amount:{' '}
                      {accounting.formatMoney(project.total_prev_payments)}
                    </li>
                    <li>
                      Current Amount Due:{' '}
                      {accounting.formatMoney(project.current_payment)}
                    </li>
                  </ul>

                  <ul>
                    <li>
                      Balance to Finish:{' '}
                      {accounting.formatMoney(
                        project.budget_total - project.total_completed
                      )}
                    </li>
                    <li>
                      Completion:{' '}
                      {(
                        (project.total_completed / project.budget_total) *
                        100
                      ).toFixed(2)}
                      %
                    </li>
                  </ul>
                </section>
              )
            }
          }}
        </ProjectContextConsumer>
      </div>
    )
  }
}
