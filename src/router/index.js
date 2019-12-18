import Vue from 'vue'
import Router from 'vue-router'
import {store} from '@/store/store'
const Error404 = () => import('@/components/pages/Errors/Error404')
const Login = () => import('@/components/pages/Login/Login')
const Home = () => import('@/components/pages/Home/Home')
const AddEditBene = () => import('@/components/pages/Bene/AddEditBene')
const AddEditFunzione = () => import('@/components/pages/Funzione/AddEditFunzione')
const ViewBene = () => import('@/components/pages/Bene/ViewBene')
const ValidaBene = () => import('@/components/pages/Bene/ValidaBene')
const ValidaFunzione = () => import('@/components/pages/Funzione/ValidaFunzione')
const ViewFunzione = () => import('@/components/pages/Funzione/ViewFunzione')
const RicercaBeniApprovati = () => import('@/components/pages/Bene/BeniRicercaApprovati')
const RicercaFunzioniApprovate = () => import('@/components/pages/Funzione/FunzioniRicercaApprovate')
const MyMap = () => import('@/components/pages/Map/MapPage')
const MyMapOptions = () => import('@/components/pages/Options/MapOptions')
const BeniAggiuntiTemp = () => import('@/components/pages/Bene/BeniAggiuntiTemp')
const FunzioniAggiunteTemp = () => import('@/components/pages/Funzione/FunzioniAggiunteTemp')
const manageUsers = () => import('@/components/pages/Utente/GestisciUtenti')

// solo per il debug OR true
const isAuthenticated = () => store.getters.loggedIn || true

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
    {
      path: '/bene',
      component: {
        name: 'PageBene',
        template: '<router-view/>'
      },
      children: [
        {
          path: 'aggiungi',
          // addEditBene
          component: AddEditBene,
          props: () => ({
            title: 'Aggiungi un bene',
            backTo: '/home'
          })
        },
        {
          path: 'modifica/:id',
          // addEditBene
          component: AddEditBene,
          props: (route) => ({
            title: 'Modifica Bene',
            idBene: route.params.id,
            editMode: true
          })
        },
        {
          path: 'modifica/:id/:id_utente',
          // addEditBene
          component: AddEditBene,
          props: (route) => ({
            idBene: route.params.id,
            idUtente: route.params.id_utente,
            cercaInArchivioTemp: true,
            editMode: true,
            title: 'Modifica un bene temporaneo'
          })
        },
        {
          path: 'ricerca',
          component: RicercaBeniApprovati,
          props: () => ({
          })
        },
        {
          path: 'dettagli_bene',
          component: ViewBene,
          props: () => ({
          })
        },
        {
          path: 'dettagli_bene/:id',
          component: ViewBene,
          props: (route) => ({
            idBene: route.params.id,
            disallowIDChange: true
          })
        },
        {
          path: 'dettagli_bene/:id/:id_utente',
          component: ViewBene,
          props: (route) => ({
            idBene: route.params.id,
            idUtente: route.params.id_utente,
            cercaInArchivioTemp: true,
            disallowIDChange: true,
            title: 'Visualizza un bene temporaneo'
          })
        },
        {
          path: 'valida/:id/:id_utente',
          component: ValidaBene,
          props: (route) => ({
            idBene: route.params.id,
            idUtente: route.params.id_utente
          })
        }
      ]
    },
    // path per le funzioni
    {
      path: '/funzione',
      component: {
        name: 'PageFunzione',
        template: '<router-view/>'
      },
      children: [
        {
          path: 'aggiungi',
          // AddEditFunzione
          component: AddEditFunzione,
          props: () => ({
            title: 'Aggiungi una funzione',
            backTo: '/home'
          })
        },
        {
          path: 'modifica/:id',
          // AddEditFunzione
          component: AddEditFunzione,
          props: (route) => ({
            title: 'Modifica una funzione',
            idFunzione: route.params.id,
            editMode: true
          })
        },
        {
          path: 'modifica/:id/:id_utente',
          // AddEditFunzione
          component: AddEditFunzione,
          props: (route) => ({
            idFunzione: route.params.id,
            idUtente: route.params.id_utente,
            cercaInArchivioTemp: true,
            editMode: true,
            title: 'Modifica una funzione temporanea'
          })
        },
        {
          path: 'ricerca',
          component: RicercaFunzioniApprovate,
          props: (route) => ({
            backTo: '/home'
          })
        },
        {
          path: 'dettagli_funzione',
          component: ViewFunzione,
          props: () => ({
          })
        },
        {
          path: 'dettagli_funzione/:id',
          component: ViewFunzione,
          props: (route) => ({
            idFunzione: route.params.id
          })
        },
        {
          path: 'dettagli_funzione/:id/:id_utente',
          component: ViewFunzione,
          props: (route) => ({
            idFunzione: route.params.id,
            idUtente: route.params.id_utente,
            cercaInArchivioTemp: true,
            title: 'Visualizza una funzione temporanea'
          })
        },
        {
          path: 'valida/:id/:id_utente',
          component: ValidaFunzione,
          props: (route) => ({
            idFunzione: route.params.id,
            idUtente: route.params.id_utente
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
      component: BeniAggiuntiTemp,
      props: () => ({
        backTo: '/home'
      })
    },
    {
      path: '/mio_lavoro_funzioni',
      name: 'mioLavoroFunzioniPage',
      component: FunzioniAggiunteTemp,
      props: () => ({
        backTo: '/home'
      })
    },
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
      path: '*',
      name: 'PageNotFound',
      component: Error404
    }
  ]
})

router.beforeEach(function (to, from, next) {
  let {path} = to
  // se vengo già dalla pagina di login si ha un loop
  if (path !== '/' && !isAuthenticated()) next('/')
  else next()
})

export default router
