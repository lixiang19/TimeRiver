import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'vuetify/dist/vuetify.min.css'
import './registerServiceWorker'
import Alert from './components/alert/index'
import VCharts from 'v-charts'
Vue.use(Alert)
Vue.config.productionTip = false
Vue.use(VCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
