import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from '@/components/Home.vue'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Signout from '@/components/Signout'
import Tourlist from '@/components/Tourlist'
import Aoshima from '@/components/Aoshima'
import Horikiri from '@/components/Horikiri'

Vue.use(Router)
 
let router =  new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {title: "Miyazaki Tourist"}
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin,
    },
    {
        path: '/signout',
        name: 'Signout',
        component: Signout,
    },
    {
        path: '/tourlist',
        name: 'Tourlist',
        component: Tourlist,
    },
    {
        path: '/aoshima',
        name: 'Aoshima',
        component: Aoshima,
    },
    {
        path: '/horikiri',
        name: 'Horikiri',
        component: Horikiri,
    },
  ]
})

// ログインが完了していない場合にサインインページの飛ばす
//firebase.auth().currentUserで現在ログインしているユーザ情報を参照
router.beforeEach((to, from, next)=>{
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    let currentUser = firebase.auth().currentUser
    if (requiresAuth){
    if (!currentUser){
      next({
        path: '/signin',
        query: {redirect: to.fullPath}
      })
    }else{
      next()
    }
  }else{
    next()
  }
  })
   
export default router