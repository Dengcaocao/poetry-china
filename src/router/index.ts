import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: () => import('@/views/poetry/index.vue')
    }
  ]
})

export default router
