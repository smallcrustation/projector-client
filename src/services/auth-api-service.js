import config from '../config'

const AuthApiService = {
  async login(credentials) {
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  },
  

}

export default AuthApiService