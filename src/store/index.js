import Vue from 'vue'
import Vuex from 'vuex'
import dayListStore from './modules/dayListStore'
import tagsStore from './modules/tagsStore'
import global from './modules/global'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dayListStore,
    tagsStore,
    global
  }
})

export default store
