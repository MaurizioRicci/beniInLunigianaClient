<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" v-if="!noMenu">
        <Menu/>
      </b-col>
      <b-col>
        <h2 v-if="!noTitle">{{title || 'Visualizza un bene'}}</h2>
        <b-alert show v-if="form.msg_validatore" variant="primary"
          style="max-height:30vh; overflow:auto;">
          Da rivedere: {{form.msg_validatore}}
        </b-alert>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
          <BeneFormView :form="form"
            :disallowIDChange="disallowIDChange"
            @requestedId="id => fetchBeneDataByID(id)"/>
          <b-button type="button" @click="goBack">Indietro</b-button>
          <!-- si modificano solo beni definitivi -->
          <b-button type="reset" variant="danger" @click="onEdit"
            v-if="!cercaInArchivioTemp">Modifica</b-button>
      </b-col>

      <b-col cols="4">
        <MyMap ref="myMap" locked v-model="form.polygon"
          :center="mapCenter" :zoom="17"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Menu from '@/components/ui/Menu'
import MyMap from '@/components/ui/Map'
import BeneFormView from '@/components/ui/BeneFormView'
import commonPageMixin from '@/components/mixins/CommonPage'
import dettagliBeneMixin from '@/components/mixins/DettagliBene'

// @group Pages
export default {
  name: 'VisualizzaBene',
  components: { Menu, MyMap, BeneFormView },
  mixins: [commonPageMixin, dettagliBeneMixin],
  data () {
    return {}
  },
  props: {
    // possibilità di scrivere un id da cercare
    disallowIDChange: Boolean
  },
  methods: {
    onEdit () {
      this.$router.push('/bene/modifica/' + this.formRetrived.id)
    },
    init () {
      this.fetchBeneDataByID(this.idBene, this.idUtente, this.cercaInArchivioTemp)
    }
  },
  created () {
    this.init()
  },
  watch: {
    $route (to, from) {
      this.init()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
