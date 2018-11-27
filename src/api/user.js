import request from '../config/request'

export const register = data => request('/user/register', data, 'POST')

export const login = data => request('/user/login', data, 'POST')

export const getUserInfo = () => request('/user/info')
export const updateTags = data => request('/user/tags', data, 'POST')
