import React from 'react'
import accounting from 'accounting'

import './ProjectDetails.css'

export default class ProjectDetails extends React.Component {
  render() {
    return (
      <div className="ProjectDetails">
        <h3>Details</h3>
        <section>
          <ul>
            <li>Original Project Budget: {accounting.formatMoney(500)}</li>
            <li>Project Cost Adjustment: {accounting.formatMoney(500)}</li>
            <li>Project Budget to Date: {accounting.formatMoney(500)}</li>
          </ul>

          <ul>
            <li>Amount Spent to Date: {accounting.formatMoney(500)}</li>
            <li>Less Previous Amount: {accounting.formatMoney(500)}</li>
            <li>Current Amount Due: {accounting.formatMoney(500)}</li>
          </ul>

          <ul>
            <li>Balance to Finish: {accounting.formatMoney(500)}</li>
            <li>Completion: {accounting.formatMoney(500)}</li>
          </ul>
        </section>
      </div>
    )
  }
}
