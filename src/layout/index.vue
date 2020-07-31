<template>
  <div class="app-wrapper" :class="classObj">
    <v-Header />
    <app-main />
    <v-Footer />
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

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
