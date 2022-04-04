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
    path: '/courses/careerplanning',
    name: 'CareerPlanning',
    component: () => import(/* webpackChunkName: "about" */ '../views/CareerPlanning.vue')
  },
  {
    path: '/courses/intro',
    name: 'IntroToProgramming',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/IntroToProgramming.vue')
  },
  {
    path: '/courses/foundations',
    name: 'FoundationsOfComputerScience',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/FoundationsOfComputer.vue')
  },
  {
    path: '/courses/structured',
    name: 'StructuredProjects',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/StructuredProjects.vue')
  },
  {
    path: '/courses/html',
    name: 'HtmlAndCss',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/HtmlAndCss.vue')
  },
  {
    path: '/courses/sql',
    name: 'SQL',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/SqlCourse.vue')
  },
  {
    path: '/courses/portfolio',
    name: 'PortfolioCourse',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/PortfolioCourse.vue')
  },
  {
    path: '/courses/capstone',
    name: 'CapstoneProject',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubViews/CapstoneProject.vue')
  }
  

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
