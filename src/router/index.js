import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import LoadData from '../components/LoadData.vue'
import AddTask from '../components/AddTask.vue'



const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
          path: '/home/load',
          component: LoadData
      },
      {
          path: '/home/AddTask',
          component: AddTask
      }
  ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
