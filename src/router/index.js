import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pet',
    name: 'Pet',
    component: Pet
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
