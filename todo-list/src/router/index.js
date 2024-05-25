import { createRouter, createWebHistory } from 'vue-router'
import UnitsView from '../views/UnitsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'units',
      component: UnitsView
    },
    {
      path: '/movie-list',
      name: 'movieView',
      component: () => import('../views/MovieView.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/TodoListView.vue')
    }
  ]
})

export default router
