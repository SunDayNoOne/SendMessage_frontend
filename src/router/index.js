import { createRouter, createWebHistory } from 'vue-router'
import startPage from '@/pages/startPage.vue'
import LoginPage from '@/pages/loginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'startPage',
      component: startPage,
    },
    {
      path:"/login",
      name: 'loginPage',
      component: LoginPage
    }
  ]
})

export default router
