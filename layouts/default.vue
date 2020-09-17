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

  export default {
    components: {
      vHeader,
      vFooter
    },
  };
</script>

