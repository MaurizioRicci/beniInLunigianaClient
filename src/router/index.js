import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '@/components/pages/Errors/Error404'
import Login from '@/components/pages/Login/Login'
import Home from '@/components/pages/Home/Home'
import Bene from '@/components/pages/Bene/AddEditBene'
import ViewBene from '@/components/pages/Bene/ViewBene'
import RicercaBeniApprovati from '@/components/ui/RicercaBeniApprovati'
import MyMap from '@/components/pages/Map/MapPage'
import BeniAggiuntiInRevisione from '@/components/pages/Bene/BeniAggiuntiInRevisione'
import manageUsers from '@/components/pages/Utente/GestisciUtenti'

Vue.use(Router)

export default new Router({
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
    {
      path: '/bene',
      // addEditBene
      component: {
        name: 'PageBene',
        template: '<router-view/>'
      },
      children: [
        {path: 'aggiungi',
          component: Bene,
          props: (route) => ({
            title: 'Aggiungi un bene',
            id: route.query.id
          })
        },
        {path: 'modifica/:id',
          component: Bene,
          props: (route) => ({
            title: 'Modifica Bene',
            id: route.query.id,
            editMode: true
          })
        },
        {path: 'ricerca',
          component: RicercaBeniApprovati,
          props: (route) => ({
            title: 'Ricerca/Modifica beni'
          })
        }
      ]
    },
    {
      path: '/dettagli_bene',
      component: {
        name: 'PageDettagliBene',
        template: '<router-view/>'
      },
      children: [
        {path: '',
          component: ViewBene
        },
        {path: ':id',
          component: ViewBene,
          props: (route) => ({
            id: route.query.id,
            disallowIDChange: true
          })
        }
      ]
    },
    {
      path: '/mappa/:id',
      name: 'mappaPage',
      component: MyMap,
      props: true
    },
    {
      path: '/mio_lavoro_beni',
      name: 'mioLavoroBeniPage',
      component: BeniAggiuntiInRevisione
    },
    {
      path: '/gestisci_utenti',
      name: 'manageUsersPage',
      component: manageUsers
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: Error404
    }
  ]
})
