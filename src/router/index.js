import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home/Home'
import BaseIndex from '@/modules/Base/Index'
import ExampleOrTemp from '@/modules/Base/ExampleOrTemp'
import ComputedOrWatch from '@/modules/Base/ComputedOrWatch'
import ClassOrStyle from '@/modules/Base/ClassOrStyle'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Base/Index',
      name: 'BaseIndex',
      component: BaseIndex
    },
    {
      path: '/Base/ExampleOrTemp',
      name: 'ExampleOrTemp',
      component: ExampleOrTemp
    },
    {
      path: '/Base/ComputedOrWatch',
      name: 'ComputedOrWatch',
      component: ComputedOrWatch
    },
    {
      path: '/Base/ClassOrStyle',
      name: 'ClassOrStyle',
      component: ClassOrStyle
    }
  ]
})
