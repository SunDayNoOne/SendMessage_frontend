import { createRouter, createWebHistory } from 'vue-router'
import startPage from '@/pages/startPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'startPage',
      component: startPage,
    }
  ]
})

export default router
