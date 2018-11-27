
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.lightBlue,
    secondary: colors.deepOrange,
    accent: colors.deepOrange,
    error: colors.pink,
    info: colors.lightBlue.lighten3,
    success: '#FF5722',
    warning: '#E91E63'
  }
})
