import request from '../config/request'

export const getDayList = data => request('/timeRiver/list', data)

export const newEvent = data => request('/eventList/event', data, 'POST')

export const updateEvent = data => request('/eventList/event', data, 'PUT')
