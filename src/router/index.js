import { createRouter, createWebHistory } from 'vue-router'
import startPage from '@/pages/startPage.vue'
import LoginPage from '@/pages/loginPage.vue'
import workPage from '@/pages/workPage.vue'
import WorkPage from '@/pages/workPage.vue'
import InBoxPage from '@/pages/subWorkPages/InBoxPage.vue'
import SentPage from '@/pages/subWorkPages/SentPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'startPage',
      component: startPage,
    },
    {
      path: "/login",
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: "/main",
      name: "MainPage",
      component: WorkPage,
      children: [
        {
          path: "/InBoxPage",
          name: "BoxPage",
          component: InBoxPage
        }, {
          path: "/SentPage",
          name: "SentPage",
          component: SentPage
        }
      ]
    }
  ]
})

export default router
