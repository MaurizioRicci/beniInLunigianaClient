import { loadMacroEpocaCar, loadMacroEpocaOrig, loadEsistenza } from '@/assets/js/loadDict'

export default {
  data () {
    return {
      // numero di filtri applicati alla tabella
      filtersCount: 0,
      // opzioni per VueTables2
      options: {
        caption: 'd',
        filterable: [
          'id',
          'status',
          'identificazione',
          'descrizione',
          'comune',
          'esistenza',
          'macroEpocaCar',
          'macroEpocaOrig',
          'bibliografia',
          'note',
          'toponimo',
          'msg_validatore',
          'schedatori_iniziali'
        ],
        headings: {
          schedatori_iniziali: 'Sched.',
          macroEpocaCar: 'Mec',
          macroEpocaOrig: 'Meo'
        },
        headingsTooltips: {
          macroEpocaCar: 'Macro epoca caratteristica',
          macroEpocaOrig: 'Macro epoca originaria',
          msg_validatore: 'Messaggio del validatore'
        },
        columnsDropdown: true,
        columnsDisplay: {
          macroEpocaCar: 'mobileP',
          macroEpocaOrig: 'mobileP',
          schedatori_iniziali: 'mobileP'
        },
        listColumns: {
          status: [
            { id: 0, text: 'In revisione' },
            { id: 1, text: 'Da rivedere' },
            { id: 2, text: 'Pronto per invio' },
            { id: 3, text: 'Bozza' }
          ],
          macroEpocaCar: [],
          macroEpocaOrig: [],
          esistenza: []
        },
        texts: {
          filterBy: 'Filtra',
          defaultOption: 'Scegli',
          columns: 'Colonne',
          limit: 'Risultati per pagina',
          noResults: 'Nessun risultato',
          count: 'Mostro i beni da {from} a {to}, {count} beni totali|{count} beni|Un bene presente'
        },
        perPage: 30,
        perPageValues: []
      }
    }
  },
  computed: {
    sonoRevisore () {
      return this.$store.getters.getUserData.role === 'revisore'
    }
  },
  methods: {
    getMac: function () {
      return loadMacroEpocaCar(this)
        .then(resp => resp.data.map(el => { return { id: el.id, text: el.value } }))
    },
    getMeo: function () {
      return loadMacroEpocaOrig(this)
        .then(resp => resp.data.map(el => { return { id: el.id, text: el.value } }))
    },
    getEsistenza: function () {
      return loadEsistenza(this)
        .then(resp => resp.data.map(el => { return { id: el.id, text: el.value } }))
    },
    updateFiltersCount (tableRef) {
      this.filtersCount = this.$refs[tableRef].filtersCount
    }
  },
  mounted () {
    // inizializzo le select
    this.getMac().then(arr => { this.options.listColumns.macroEpocaCar = arr })
    this.getMeo().then(arr => { this.options.listColumns.macroEpocaOrig = arr })
    this.getEsistenza().then(arr => { this.options.listColumns.esistenza = arr })
    if (this.sonoRevisore) {
      // i revisori vedono solo cose da approvare o che sono marcate come da correggere da loro stessi
      this.options.listColumns.status = this.options.listColumns.status.filter(el => el.id <= 1)
    }
  }
}
