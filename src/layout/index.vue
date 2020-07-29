<template>
  <div class="app-wrapper" :class="classObj">
    <v-Header></v-Header>
    <app-main></app-main>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
  import {AppMain, vHeader, vFooter} from './components'

  export default {
    name: 'layout',
    components: {
      AppMain,
      'v-Header': vHeader,
      'v-Footer': vFooter
    },
    beforeCreate() {
      this.$store.dispatch('getOptions');
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
