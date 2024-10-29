import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import KayonzaView from './views/DISTRICTS/KayonzaView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/DISTRICTS/Kayonza', component: KayonzaView, name: "kayonza"},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router