import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user.index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/create',
      name: 'user.create',
      component: () => import('@/views/Create.vue')
    },
    {
      path: '/edit/:id',
      name: 'user.edit',
      component: () => import('@/views/Edit.vue')
    },
  ]
})

export default router
