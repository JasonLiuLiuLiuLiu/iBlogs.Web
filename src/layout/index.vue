<template>
  <div>
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

<style>
  #fixedTools {
    position: fixed;
    right: 40px;
    bottom: 40px;
    background: #FFF;
    width: 36px;
    text-align: center;
    border-radius: 2px;
    line-height: 1.25;
    z-index: 1000;
  }

  #fixedTools a {
    padding: 10px;
    border: 1px solid #DDD;
    display: block;
    color: #999;
    text-decoration: none;
  }

  .border-bottom {
    border-bottom: 1px solid #ddd;
  }
</style>
