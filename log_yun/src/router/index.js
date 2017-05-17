import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Foo from '@/components/foo'
import Bar from '@/components/bar'
import Notice from '@/components/notice'
import homework from '@/components/homework'
import c_notice from '@/components/createNotice'
import firstTab from '@/components/tabbar'
import pictureView from '@/components/picture'
import pageNav from '@/components/pageNav'
import yearIndex from '@/components/yearIndex'
import comments from '@/components/comments'

Vue.use(Router)
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    { path: '/foo', 
      name:'CreateHomework',
      component: Foo 
    }, 
    { path: '/bar',
      name:'uploadImg' ,
      component: Bar },
    { path: '/notice', 
      name:'notice',
      component:Notice },
    { path: '/homework',
      nema:'homework',
      component:homework },
    { path: '/c_notice',
      name:'createNotice',
      component:c_notice },
    { path: '/comments',
      name:'comments',
      component:comments },
    { path: '/home',
      name:'home',
      component:firstTab,
        children:[
          {
            path:'/home/pageNav',
            name:'pageNav',
            component: pageNav
          },
          {
            path:'/home/yearIndex',
            name:'yearIndex',
            component: yearIndex
          }
        ] 
      },
      { path: '/pic',
        name:'picture', 
        component:pictureView } 
  ]
})