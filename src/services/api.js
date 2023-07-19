import axios from 'axios'

const apiCodeBurguer = axios.create({
  baseURL: 'https://api-code-club-burger-production.up.railway.app/'
})

apiCodeBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurguer
