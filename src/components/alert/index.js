import AlertComponent from './alert'// 引入vue模板
export default {
  install (Vue, options) {
    let AlertInstance = Vue.extend(AlertComponent)
    let alert
    const initInstance = () => {
      // 实例化vue实例
      alert = new AlertInstance()
      let alertEl = alert.$mount().$el
      document.body.appendChild(alertEl)
    }

    Vue.prototype.$alert = {
      show (options) {
        initInstance()
        if (typeof options === 'string') {
          alert.msg = options
        } else if (typeof options === 'object') {
          Object.assign(alert, options)
        }
      }
    }
  }

}
