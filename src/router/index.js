import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shasta from '@/components/Shasta'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shasta',
      name: 'Shasta',
      component: Shasta
    }
  ]
})
