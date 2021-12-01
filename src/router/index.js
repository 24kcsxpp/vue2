import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home/Home'
import BaseIndex from '@/modules/Base/Index'
import ExampleOrTemp from '@/modules/Base/ExampleOrTemp'
import ComputedOrWatch from '@/modules/Base/ComputedOrWatch'
import ClassOrStyle from '@/modules/Base/ClassOrStyle'
import FormIndex from '@/modules/Form/Index'
import FormInputBind from '@/modules/Form/FormInputBind'
import ComponentsIndex from '@/modules/Components/Index'
import TransmissionType from '@/modules/Components/TransmissionType'
import MiXin from '@/modules/Components/MiXin'
import Directive from '@/modules/Components/Directive'
import StoreIndex from '@/modules/Store/Index'
import State from '@/modules/Store/State'
import Getters from '@/modules/Store/Getters'
import Mutations from '@/modules/Store/Mutations'
import Modules from '@/modules/Store/Modules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title: "首页"
      }
    },
    {
      path: '/Base/Index',
      name: 'BaseIndex',
      component: BaseIndex,
      meta:{
        title: "基础篇"
      }
    },
    {
      path: '/Base/ExampleOrTemp',
      name: 'ExampleOrTemp',
      component: ExampleOrTemp,
      meta:{
        title: "VUE实例和模板语法"
      }
    },
    {
      path: '/Base/ComputedOrWatch',
      name: 'ComputedOrWatch',
      component: ComputedOrWatch,
      meta:{
        title: "计算属性和侦听器"
      }
    },
    {
      path: '/Base/ClassOrStyle',
      name: 'ClassOrStyle',
      component: ClassOrStyle,
      meta:{
        title: "Class与Style绑定"
      }
    },
    {
      path: '/Form/Index',
      name: 'FormIndex',
      component: FormIndex,
      meta:{
        title: "表单篇"
      }
    },
    {
      path: '/Form/FormInputBind',
      name: 'FormInputBind',
      component: FormInputBind,
      meta:{
        title: "表单输入绑定"
      }
    },
    {
      path: '/Components/Index',
      name: 'ComponentsIndex',
      component: ComponentsIndex,
      meta:{
        title: "组件篇"
      }
    },
    {
      path: '/Components/TransmissionType',
      name: 'TransmissionType',
      component: TransmissionType,
      meta:{
        title: "组件间的传值方式"
      }
    },
    {
      path: '/Components/MiXin',
      name: 'MiXin',
      component: MiXin,
      meta:{
        title: "混入"
      }
    },
    {
      path: '/Components/Directive',
      name: 'Directive',
      component: Directive,
      meta:{
        title: "自定义指令"
      }
    },
    {
      path: '/Store/Index',
      name: 'StoreIndex',
      component: StoreIndex,
      meta:{
        title: "状态篇"
      }
    },
    {
      path: '/Store/State',
      name: 'State',
      component: State,
      meta:{
        title: "State篇"
      }
    },
    {
      path: '/Store/Getters',
      name: 'Getters',
      component: Getters,
      meta:{
        title: "Getters篇"
      }
    },
    {
      path: '/Store/Mutations',
      name: 'Mutations',
      component: Mutations,
      meta:{
        title: "Mutations篇"
      }
    },
    {
      path: '/Store/Modules',
      name: 'Modules',
      component: Modules,
      meta:{
        title: "Modules篇"
      }
    }
  ]
})
