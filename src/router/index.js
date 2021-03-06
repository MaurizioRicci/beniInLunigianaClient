import Vue from 'vue'
import Router from 'vue-router'
import { store } from '@/store/store'
import RoutesBeni from '@/router/routesBeni'
import RoutesFunzioni from '@/router/routesFunzioni'
const Error404 = () => import('@/components/pages/Errors/Error404')
const Login = () => import('@/components/pages/Login/Login')
const Home = () => import('@/components/pages/Home/Home')
const MyMapOptions = () => import('@/components/pages/Options/MapOptions')
const manageUsers = () => import('@/components/pages/Utente/GestisciUtenti')
const Aiuto = () => import('@/components/pages/Aiuto/Aiuto')
const ShowLog = () => import('@/components/pages/MostraLog')
// solo per il debug OR true
const isAuthenticated = () => store.getters.loggedIn

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/home',
      name: 'homePage',
      component: Home
    },
    // path per i beni
    RoutesBeni,
    // path per le funzioni
    RoutesFunzioni,
    {
      path: '/gestisci_utenti',
      name: 'manageUsersPage',
      component: manageUsers
    },
    {
      path: '/options',
      component: {
        name: 'optionsPage',
        template: '<router-view/>'
      },
      children: [
        {
          path: 'map',
          component: MyMapOptions
        }
      ]
    },
    {
      path: '/aiuto',
      name: 'aiutoPage',
      component: Aiuto
    },
    {
      path: '/showLog',
      name: 'logPage',
      component: ShowLog
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: Error404
    }
  ]
})

router.beforeEach(function (to, from, next) {
  let { path } = to
  // se vengo già dalla pagina di login si ha un loop
  if (path !== '/' && !isAuthenticated()) next('/')
  // se vado alla root e sono autenticato vado alla home
  else if (path === '/' && isAuthenticated())next('/home')
  else next()
})

export default router
