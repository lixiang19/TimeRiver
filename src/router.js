import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TagsSettings from './views/TagsSettings'
import Login from './views/login'
import Memory from './views/Memory'
import Chart from './views/Chart'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/tagsSettings',
      name: 'tagsSettings',
      component: TagsSettings,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/memory',
      name: 'memory',
      component: Memory,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = localStorage.getItem('USER_TOKEN')
    if (token && token !== 'null') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
