import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    }
  ]
})

export default router
