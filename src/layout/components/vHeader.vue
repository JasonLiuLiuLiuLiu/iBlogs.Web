<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand :href="this.$store.state.options.options.SiteUrl">
      <img src="/static/img/logo.png" alt="码农阿宇">
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/archives">归档</b-nav-item>
      <b-nav-item href="/links">友链</b-nav-item>
      <b-nav-item href="/about">关于</b-nav-item>
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'VHeader'
}
</script>
<style>

</style>
