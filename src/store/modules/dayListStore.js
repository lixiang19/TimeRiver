import { time, Event } from '../../config/util'
import * as api from '../../api/index'
export default {
  state: {
    isEmpty: false,
    list: []
  },
  getters: {
    displayList: state => {
      if (!state.list) return
      return state.list.map(function (item) {
        item.startTime = time.format(item.startTime)
        item.endTime = time.format(item.endTime)
        item.lengthTime = Math.floor(item.lengthTime / 60000)
        return item
      })
    }
  },
  mutations: {
    updateIsEmpty (state) {
      state.isEmpty = true
    },
    updateList (state, payload) {
      state.list = payload.data
    },
    pushList (state, payload) {
      state.list.push(payload.data)
    }
  },
  actions: {
    // 请求今日数据并存入vuex
    async getTodayList ({ commit, rootState }) {
      let date = time.getNowTime().dateNumber
      let result = await api.getDayList({ date })
      if (result.status === 204) {
        commit('updateIsEmpty')
      }
      commit('updateList', result.data)
    },
    // 创建新事件
    async newEvent ({ dispatch, commit }, payload) {
      // 趁机更新上一个事件
      if (localStorage.getItem('preEvent')) {
        dispatch('updatePreEvent')
      }
      // 新建一个新事件
      let event = new Event(payload)
      let result = await api.newEvent(event)

      if (result.status === 200 && result.data.code === 0) {
        localStorage.setItem('preEvent', JSON.stringify(result.data.data))
        dispatch('getTodayList')
      }
    },
    async updatePreEvent ({ dispatch }) {
      let preEvent = JSON.parse(localStorage.getItem('preEvent'))
      if (!preEvent.date === time.getNowTime().dateNumber) {
        let newEvent = JSON.parse(JSON.stringify(preEvent))
        preEvent.endTime = time.getDayEnd(preEvent.startTime)
        preEvent.lengthTime = preEvent.endTime - preEvent.startTime
        await api.updateEvent(preEvent)
        newEvent.startTime = time.getDayStart(Date.now())
        newEvent.date = time.getNowTime().dateNumber
        let result = await api.newEvent(newEvent)
        if (result.status === 200 && result.data.code === 0) {
          localStorage.setItem('preEvent', JSON.stringify(result.data.data))
        }
      }
      preEvent.endTime = Date.now()
      preEvent.lengthTime = preEvent.endTime - preEvent.startTime
      await api.updateEvent(preEvent)
    }
  }
}
