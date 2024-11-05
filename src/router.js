import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import loginForm from './views/loginform.vue'
import KayonzaView from './views/Districts/KayonzaView.vue' 
import RwamaganaView from './views/Districts/RwamaganaView.vue'
import BugeseraView from './views/Districts/BugeseraView.vue'
import NyagatareView from './views/Districts/NyagatareView.vue'
import Kireheview from './views/Districts/Kireheview.vue'
import NgomaView from './views/Districts/NgomaView.vue'
import GatsiboView from './views/Districts/GatsiboView.vue'
import ButareView from './views/Districts/ButareView.vue'
import EasternView from './views/Provinces/EasternView.vue'
import WesternView from './views/Provinces/WesternView.vue'
import NorthernView from './views/Provinces/NorthernView.vue'
import SouthernView from './views/Provinces/SouthernView.vue'
import KigaliCityView from './views/Provinces/Kigali cityView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path:  '/login form', component: loginForm, name: "login"},
  { path: '/DISTRICTS/Kayonza', component: KayonzaView, name: "kayonza"},
  { path: '/DISTRICTS/Rwamagana', component: RwamaganaView, name: "rwamagana"},
  { path: '/DISTRICTS/Bugesera', component: BugeseraView, name: "bugesera"},
  { path: '/DISTRICTS/Nyagatare', component: NyagatareView, name:"nyagatare"},
  { path: '/DISTRICTS/Kirehe', component: Kireheview, name: "kirehe"},
  { path: '/DISTRICTS/Ngoma', component: NgomaView, name: "ngoma"},
  { path: '/DISTRICTS/Gatsibo', component: GatsiboView, name: "gatsibo"},
  { path: '/DISTRICTS/Butare', component: ButareView, name: "butare" },

  { path: '/PROVINCES/EasternView', component: EasternView, name: "eastern"},
  { path: '/PROVINCES/WesternView', component: WesternView, name: "western"},
  { path: '/PROVINCES/NorthernView', component: NorthernView, name: "northern"},
  { path: '/PROVINCES/SouthernView', component: SouthernView, name: "southern"},
  { path: '/PROVINCES/kigali cityView', component: KigaliCityView, name: "kigali city"}



]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router