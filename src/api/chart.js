import request from '../config/request'

export const getWeek = data => request('/chart/week', data)
