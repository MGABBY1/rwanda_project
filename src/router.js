import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import KayonzaView from './views/Districts/KayonzaView.vue' 
import RwamaganaView from './views/Districts/RwamaganaView.vue'
import BugeseraView from './views/Districts/BugeseraView.vue'
import NyagatareView from './views/Districts/NyagatareView.vue'
import Kireheview from './views/Districts/Kireheview.vue'
import NgomaView from './views/Districts/NgomaView.vue'
import GatsiboView from './views/Districts/GatsiboView.vue'
import ButareView from './views/Districts/ButareView.vue'



const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/DISTRICTS/Kayonza', component: KayonzaView, name: "kayonza"},
  { path: '/DISTRICTS/Rwamagana', component: RwamaganaView, name: "rwamagana"},
  { path: '/DISTRICTS/Bugesera', component: BugeseraView, name: "bugesera"},
  { path: '/DISTRICTS/Nyagatare', component: NyagatareView, name:"nyagatare"},
  { path: '/DISTRICTS/Kirehe', component: Kireheview, name: "kirehe"},
  { path: '/DISTRICTS/Ngoma', component: NgomaView, name: "ngoma"},
  { path: '/DISTRICTS/Gatsibo', component: GatsiboView, name: "gatsibo"},
  { path: '/DISTRICTS/Butare', component: ButareView, name: "butare" }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router