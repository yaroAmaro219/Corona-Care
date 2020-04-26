const axios = require('axios')

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://corona-community-care.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

// ============ POST ============

export const postPost = async (id, postData) => {
  const resp = await api.post(`/users/${id}/posts`, { post: postData })
  return resp.data
}

export const showPost = async (id) => {
  const resp = await api(`/users/${id}`)
  return resp.data
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/courts/:id/reservations/${id}`)
  return resp.data
}

//========== AUTH ===================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post(`/users/`, { user: registerData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

