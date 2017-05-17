import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Foo from './component/foo.vue'
import Bar from './component/bar.vue'
import Notice from './component/notice.vue'
import homework from './component/homework.vue'
import c_notice from './component/createNotice.vue'
import firstTab from './component/tabbar.vue'
import pictureView from './component/picture.vue'
import pageNav from './component/pageNav.vue'
import yearIndex from './component/yearIndex.vue'
import comments from './component/comments.vue'

Vue.use(Router)

export default new Router({
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
