<template>
<div>
  <v-server-table :columns="columns" :options="options" class="myTable"
    :url="$store.getters.funzioniAggiunteApprovateURL">

        <template v-slot:azioni="{row}">
          <b-button-group vertical>
            <b-button :to="'/funzione/dettagli_funzione/'.concat(row.id)" class="pt-1">Vedi dettagli</b-button>
            <b-button :to="'/funzione/modifica/'.concat(row.id)" row.id class="pt-1">Modifica</b-button>
          </b-button-group>
        </template>

      <template v-slot:ruolo="{row}">
        <!-- e' un array di ruoli, li separo con virgola -->
        {{JSON.parse(row.ruolo).join(',')}}
      </template>

        <template v-slot:ruolor="{row}">
        <!-- e' un array di ruoli, li separo con virgola -->
        {{JSON.parse(row.ruolor).join(',')}}
      </template>

      <template v-slot:bibliografia="{row}">
        <!-- oltre i 50 caratteri (valore di default) tronco la stringa con i puntini -->
        {{row.bibliografia | ellipsizeLongText()}}
      </template>

      <template v-slot:note="{row}">
        <!-- oltre i 50 caratteri (valore di default) tronco la stringa con i puntini -->
        {{row.note | ellipsizeLongText()}}
      </template>
    </v-server-table>
</div>
</template>

<script>
import ellipsize from '@/assets/js/Filters/ellipsizeLongText'
import '@/assets/css/hugeModal.css'
window.axios = require('axios')

// Mostra una tabella con tutti i beni approvati di tutti gli utenti
export default {
  name: 'BeniUtente',
  components: {},
  filters: {ellipsizeLongText: ellipsize},
  props: {},
  methods: {},
  data: function () {
    return {
      modalShowView: false,
      modalShowEdit: false,
      columns: [
        'id',
        'azioni',
        'denominazione',
        'denominazioner',
        'data',
        'tipodata',
        'funzione',
        'id_bene',
        'id_utente_bene',
        'ruolo',
        'id_bener',
        'id_utente_bener',
        'ruolor',
        'bibliografia',
        'note',
        'schedatori_iniziali'
      ],
      options: {
        caption: 'Questa tabella contiene tutte le funzioni approvate.',
        perPage: 25,
        filterable: true,
        filterByColumn: true,
        sendEmptyFilters: true,
        sortIcon: {
          base: 'fas',
          is: 'fa-sort',
          up: 'fa-sort-up',
          down: 'fa-sort-down'
        },
        texts: {limit: 'Risultati per pagina'}
      }
    }
  }
}
</script>

<style scoped>
    .myTable >>> caption { caption-side: top; }
</style>