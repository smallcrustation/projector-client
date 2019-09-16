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
    console.log('API RES: ', res.json())
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
