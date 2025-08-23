import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: 'dataSource',
          name: 'app-dataSource',
          component: () => import('@/views/dataSource/index.vue'),
        },
        {
          path: 'layout',
          name: 'app-layout',
          component: () => import('@/views/layout/index.vue'),
        },
        {
          path: 'actions',
          name: 'app-actions',
          component: () => import('@/views/actions/index.vue'),
        }
      ] 
    }
  ],
})

export default router
