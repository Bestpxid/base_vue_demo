import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from '@/components/'

// @ ==> src
Vue.use(Router)

export default new Router({
  mode: 'history', // default is 'hash', 'history' can delete '#' from url
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: helloWorld
    }
  ]
})
