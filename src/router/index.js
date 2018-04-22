import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Reset from '@/components/Reset'
import Login from '@/components/Login'
import MessegeContent from '@/components/MessegeContent'
import DataBaseDump from '@/components/DataBaseDump'
import SignUp from '@/components/SignUp'
import {auth} from '../firebase'

Vue.use(Router)

let router = new Router({mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/reset-password',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/dbdump',
      name: 'DataBaseDump',
      component: DataBaseDump
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/messege/:id',
      name: 'MessegeContent',
      component: MessegeContent,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let emailVerified = false
  if (currentUser) {
    emailVerified = auth.currentUser.emailVerified
  }

  if (requiresAuth && (!currentUser || !emailVerified)) next('login')
  else if (!requiresAuth && currentUser && emailVerified) next('hello')
  else next()
})

export default router
