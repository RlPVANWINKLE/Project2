import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/CoursesView.vue')
  },
  {
    path: '/instructors',
    name: 'instructors',
    component: () => import(/* webpackChunkName: "about" */ '../views/InstructorView.vue')
  }, 
  {
    path: '/graduation',
    name: ' graduation',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostGraduation.vue')
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
