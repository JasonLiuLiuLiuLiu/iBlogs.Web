<template>
  <div>
    <v-header/>
    <nuxt/>
    <v-footer/>
  </div>
</template>
<script>
  import vHeader from "./vHeader";
  import vFooter from "./vFooter";
  import getPageTitle from '@/utils/get-page-title'

  export default {
    components: {
      vHeader,
      vFooter
    },
    head() {
      return {
        title:getPageTitle(this.$store.state.content.content.title) ,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$store.state.options.options.Description
          },
          {
            hid: 'author',
            name: 'author',
            content: this.$store.state.options.options.Author
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.$store.state.options.options.Keywords
          },
        ]
      }
    }
  };
</script>

