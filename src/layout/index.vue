<template>
  <div>
    <div class="navbar navbar-expand-lg fixed-top navbar-light bg-light" style="">
      <v-Header />
    </div>
    <b-container>
      <app-main />
      <v-Footer />
    </b-container>
  </div>
</template>

<script>
import { AppMain, vHeader, vFooter } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    'v-Header': vHeader,
    'v-Footer': vFooter
  },
  computed: {
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        mobile: this.device === 'mobile'
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch('getOptions')
  }
}
</script>

<style>
  body {
    margin-top: 80px;
  }
</style>
