import Vue from 'vue'
import Router from 'vue-router'
import Qtd from '@/components/qtd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Qtd',
      component: Qtd
    }
  ]
})
