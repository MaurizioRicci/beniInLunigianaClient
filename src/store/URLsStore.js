// Vuex store per le URL
const serverURLsStore = {
  state: {
    serverURL: 'http://myserverapp',
    login: '/login.php',
    gestioneUtenti: '/manageUsers.php',
    userStats: '/userStats.php',
    elencoProvince: '/options/map/elencoProvince.php', // per settare il centro della mappa di default
    // URL per i beni
    aggiungiBene: '/inserisci/beni/crea.php',
    modificaBene: '/modifica/beni/modifica.php',
    segnalaBene: '/valida/beni/segnala.php',
    approvaBene: '/valida/beni/valida.php',
    filtraIdent: '/filtraIdent.php',
    filtraToponimo: '/filtraToponimi.php',
    filtraComune: '/filtraComuni.php',
    dettagliBene: '/visualizza/beni/dettagliBene.php',
    getDizionario: '/getDictionary.php',
    beniAggiuntiTemp: '/visualizza/beni/beniAggiuntiTemp.php',
    beniAggiuntiApprovati: '/visualizza/beni/beniAggiuntiApprovati.php',
    // URL per le funzioni
    aggiungiFunzione: '/inserisci/funzioni/crea.php',
    modificaFunzione: '/modifica/funzioni/modifica.php',
    segnalaFunzione: '/valida/funzioni/segnala.php',
    approvaFunzione: '/valida/funzioni/valida.php',
    dettagliFunzione: '/visualizza/funzioni/dettagliFunzione.php',
    funzioniAggiunteTemp: '/visualizza/funzioni/funzioniAggiunteTemp.php',
    funzioniAggiunteApprovate: '/visualizza/funzioni/funzioniAggiunteApprovate.php'
  },
  getters: {
    serverURL: state => state.serverURL,
    loginURL: state => state.serverURL + state.login,
    gestioneUtentiURL: state => state.serverURL + state.gestioneUtenti,
    userStatsURL: state => state.serverURL + state.userStats,
    elencoProvinceURL: state => state.serverURL + state.elencoProvince,
    // URL per i beni
    aggiungiBeneURL: state => state.serverURL + state.aggiungiBene,
    modificaBeneURL: state => state.serverURL + state.modificaBene,
    segnalaBeneURL: state => state.serverURL + state.segnalaBene,
    approvaBeneURL: state => state.serverURL + state.approvaBene,
    filtraIdentURL: state => state.serverURL + state.filtraIdent,
    filtraToponimoURL: state => state.serverURL + state.filtraToponimo,
    filtraComuneURL: state => state.serverURL + state.filtraComune,
    dettagliBeneURL: state => state.serverURL + state.dettagliBene,
    aggiungiRelazioneURL: state => state.serverURL + state.aggiungiRelazione,
    getDizionarioURL: state => state.serverURL + state.getDizionario,
    beniAggiuntiTempURL: state => state.serverURL + state.beniAggiuntiTemp,
    beniAggiuntiApprovatiURL: state => state.serverURL + state.beniAggiuntiApprovati,
    // URL per le funzioni
    aggiungiFunzioneURL: state => state.serverURL + state.aggiungiFunzione,
    modificaFunzioneURL: state => state.serverURL + state.modificaFunzione,
    segnalaFunzioneURL: state => state.serverURL + state.segnalaFunzione,
    approvaFunzioneURL: state => state.serverURL + state.approvaFunzione,
    dettagliFunzioneURL: state => state.serverURL + state.dettagliFunzione,
    funzioniAggiunteTempURL: state => state.serverURL + state.funzioniAggiunteTemp,
    funzioniAggiunteApprovateURL: state => state.serverURL + state.funzioniAggiunteApprovate
  }
}

export default serverURLsStore
