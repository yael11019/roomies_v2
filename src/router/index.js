import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeRommiesView from '../views/HomeRommiesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':id(\\d+)',
          component: () => import('../views/MessagesView.vue')
        },
        {
          path: ':(.*)',
          component: () => import('../views/VoidMessagesView.vue')
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Home',
      component: HomeRommiesView
    }, 
    { path: '/whoweare', component: () => import('../views/WhoWeAreView.vue')},
    { path: '/searchingroomie', component: () => import('../views/SearchingRoomieView.vue')},
    { path: '/searchingroomieandrent', component: () => import('../views/SearchingRoomie&RentView.vue')},
    { path: '/register', component: () => import('../views/RegisterView.vue')},
    {
      path: '/signin',
      component: () => import('../views/SignInView.vue')
    }
  ]
})

export default router
