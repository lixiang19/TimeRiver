import * as api from '../../api/index'
import { extract } from '../../config/util'
export default {
  state: {
    tags: []
  },
  mutations: {
    updateTags (state, payload) {
      state.tags = payload.tags
    }
  },
  getters: {
    displayTags: state => extract(state.tags)
  },
  actions: {
    // 获取用户标签
    async getUserTags ({ commit }) {
      let result = await api.getUserInfo()
      let tags = result.data.data.tags
      commit('updateTags', { tags })
    },
    async updateTags ({ commit }, payload) {
      let tags = payload
      await api.updateTags({ tags })
    }
  }
}
