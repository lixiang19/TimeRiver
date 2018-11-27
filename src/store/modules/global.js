export default {
  state: {
    netError: false,
    loading: false
  },
  mutations: {
    updateNetError (state, payload) {
      state.netError = payload.onOff
    },
    updateLoading (state, payload) {
      state.loading = payload.isLoading
    }
  },
  getters: {

  },
  actions: {
  }
}
