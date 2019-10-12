import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const serverURLsStore = {
  state: {
    serverURL: 'http://myserverapp',
    login: '/login.php',
    aggiungiBene: '/aggiungiBene.php',
    filtraBeni: '/filtraBeni.php',
    filtraToponimo: '/filtraToponimi.php',
    filtraComune: '/filtraComuni.php',
    dettagliBene: '/dettagliBene.php',
    aggiungiRelazione: '/aggiungiRelazione.php',
    getDizionario: '/getDictionary.php'
  },
  getters: {
    serverURL: state => state.serverURL,
    loginURL: state => state.serverURL + state.login,
    aggiungiBeneURL: state => state.serverURL + state.aggiungiBene,
    filtraBeniURL: state => state.serverURL + state.filtraBeni,
    filtraToponimoURL: state => state.serverURL + state.filtraToponimo,
    filtraComuneURL: state => state.serverURL + state.filtraComune,
    dettagliBeneURL: state => state.serverURL + 'visualizza/beni' + state.dettagliBene,
    aggiungiRelazioneURL: state => state.serverURL + state.aggiungiRelazione,
    getDizionario: state => state.serverURL + state.getDizionario
  },
  mutations: {}
}

const userDataStore = {
  state: {
    currUserData: {
      username: '',
      password: '',
      role: ''
    }
  },
  getters: {
    getUserData: state => state.currUserData,
    loggedIn: state => state.currUserData.username !== '' &&
      state.currUserData.password !== ''
  },
  mutations: {
    registerUser (state, userData) {
      let {username, password, role} = userData
      state.currUserData.username = username
      state.currUserData.password = password
      state.currUserData.role = role
    }
  }
}

export const store = new Vuex.Store({
  modules: {
    serverlURLs: serverURLsStore,
    userData: userDataStore
  }
})
