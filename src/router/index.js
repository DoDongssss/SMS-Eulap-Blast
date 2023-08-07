import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/index.vue'
import loa from '../views/LOA.vue'
import print from '../views/LOA_print.vue'
import notFound from '../views/notFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/loa',
      name: 'loa',
      component: loa
    },
    {
      path: '/loa/print',
      name: 'print',
      component: print
    },
    ,
    {
      path: '/:notFound',
      name: '404',
      component: notFound
    }
  ]
})

export default router
