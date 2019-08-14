import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import changeTheme from '@/pages/changeTheme'
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
    }
  ]
})
