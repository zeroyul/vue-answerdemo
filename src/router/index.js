import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/index'
import Item from '@/page/item/index'
import Score from '@/page/score/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    },
  ]
})
