import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.page.vue'
import SignInAndRegisterPage from '../views/SignInAndRegister.page.vue'
import SearchPage from '../views/Search.page.vue'
import ContactPage from '../views/Contact.page.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/signin',
    name: 'Sign In And Register',
    component: SignInAndRegisterPage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
