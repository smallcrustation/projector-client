import React from 'react'
import { formatMoney } from 'accounting'

// import { ProjectContextConsumer } from '../../contexts/ProjectContext'
import { ProjectContext } from '../../contexts/ProjectContext'

import './ProjectDetails.css'

export default class ProjectDetails extends React.Component {
  static contextType = ProjectContext

  renderProjectTable() {
    if (!this.context.project) {
      return <div>Loading...</div>
    }

    const fm = formatMoney
    const project = this.context.project

    return (
      <table id="ProjectDetails__table">
        <tbody>
          <tr>
            <td>Original Project Budget</td>
            <td>{fm(project.budget_original)}</td>
          </tr>
          <tr>
            <td>Project Cost Adjustment</td>
            <td>{fm(project.budget_adjusted)}</td>
          </tr>
          <tr className="thick-border">
            <td>Project Budget to Date</td>
            <td>{fm(project.budget_total)}</td>
          </tr>
          <tr><td className="space">&nbsp;</td></tr>
          <tr>
            <td>Completed to Date</td>
            <td>{fm(project.total_completed)}</td>
          </tr>
          <tr>
            <td>Less Previous Amount</td>
            <td>{fm(project.total_prev_payments)}</td>
          </tr>
          <tr className="thick-border">
            <td>Current Amount Due</td>
            <td>{fm(project.current_payment)}</td>
          </tr>
          <tr><td className="space">&nbsp;</td></tr>
          <tr className="thick-border">
            <td>Balance to Finish</td>
            <td>{fm(project.budget_total - project.total_completed)}</td>
          </tr>
          <tr>
            <td>Completion</td>
            <td>
              {((project.total_completed / project.budget_total) * 100)
              .toFixed(2)} %
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  render() {
    console.log(this.context.project)
    return (
      <div className="ProjectDetails">
        {!this.context.project?'':<h3>{this.context.project.project_name}</h3>}
        <h3 className="ProjectDetails_header">Details</h3>
        {this.renderProjectTable()}
        {/* <ProjectContextConsumer>
          {value => {
            // console.log(value.project)
            const project = value.project
            if (project) {
              return (
                <section className="ProjectDetails__section">
                  <ul className="ProjectDetails__ul">
                    <li className="ProjectDetails__li">
                      Original Project Budget:{' '}
                      {accounting.formatMoney(project.budget_original)}
                    </li>
                    <li className="ProjectDetails__li">
                      Project Cost Adjustment:{' '}
                      {accounting.formatMoney(project.budget_adjusted)}
                    </li>
                    <li className="ProjectDetails__li">
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
        </ProjectContextConsumer> */}
      </div>
    )
  }
}
