import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import changeTheme from '@/pages/changeTheme'
import test from '@/pages/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/selColor',
      name: 'selColor',
      component: changeTheme
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
