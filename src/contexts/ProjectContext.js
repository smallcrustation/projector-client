import React from 'react'

  // id, 
  // project_name ,
  // location ,
  // budget_original ,
  // budget_adjusted ,
  // amount_spent ,
  // date_created ,
  // date_modified ,
  // user_id

// null project?

const ProjectsContext = React.createContext()

export default ProjectsContext

export class ProjectsProvider extends React.Component{
  state = {
    thing: null,
    error: null
  }

}

