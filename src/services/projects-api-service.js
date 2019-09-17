import config from '../config'
import TokenService from './token-service'

const projectApiServer = {
  async getProjects(){
    const res = await fetch(`${config.API_ENDPOINT}/projects/`,{
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
    if(!res.ok){
      return res.json().then(e => Promise.reject(e))
    }

    return res.json()
  },

  async postProjects(newProject){
    const res = await fetch(`${config.API_ENDPOINT}/projects`,{
      method: 'POST',
      headers:{
        'Authorization' : `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject)
    })
    if(!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  },

  async getProjectById(id){
    const res = await fetch(`${config.API_ENDPOINT}/projects/${id}`,{
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
    if(!res.ok){
      return res.json().then(e => Promise.reject(e))
    }

    return res.json()

  }
}

// fetch('http://localhost:8000/api/projects/', {
//   headers: {
//     'Authorization': `Bearer ${TokenService.getAuthToken()}`
//   },
// })
// .then(res => res.json())
// .then(projectList => this.context.setProjectsList(projectList))

export default projectApiServer
