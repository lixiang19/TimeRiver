import axios from 'axios'
// import qs from 'qs'
import { baseUrl } from './env.js'
import router from '../router.js'
import store from '../store/index.js'

axios.interceptors.request.use(
  config => {
    store.commit('updateLoading', { isLoading: true })
    const token = localStorage.getItem('USER_TOKEN')
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  err => {
    store.commit('updateLoading', { isLoading: false })
    store.commit('updateNetError', { onOff: true })
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    store.commit('updateLoading', { isLoading: false })
    return response
  },
  error => {
    store.commit('updateLoading', { isLoading: false })
    store.commit('updateNetError', { onOff: true })
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.removeItem('USER_TOKEN')
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    console.log(`请求响应错误：${error}`)
    throw error
  }
)
export default async (url = '', data = {}, type = 'GET') => {
  url = baseUrl + url
  if (type === 'POST' || type === 'PUT') {
    return axios({
      method: type,
      url: url,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } else {
    return axios({
      url: url,
      params: data,
      method: type,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
