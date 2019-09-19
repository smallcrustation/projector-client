import config from '../config'
import TokenService from './token-service'

const paymentsApiService = {
  async postPayment(newPayment){
    console.log(newPayment)
    const res = await fetch(`${config.API_ENDPOINT}/payments/`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPayment)
    })
    if(!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  }
}

export default paymentsApiService