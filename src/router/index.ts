import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const MainLayout = () => import('@/layouts/MainLayout.vue')
const HomePage = () => import('@/views/HomePage.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'MainLayout',
    alias: '/',
    component: MainLayout,
    children: [{ path: '', name: 'HomePage', component: HomePage }],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
