<template>
  <headroom>
    <b-navbar class="bg-light" style="">
      <b-container>
        <b-navbar-brand :href="this.$store.state.options.options.SiteUrl">
          <img src="/static/img/logo.png" alt="@ViewService.SiteOption(ConfigKey.SiteTitle)">
        </b-navbar-brand>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <b-collapse id="navbarResponsive" class="collapse navbar-collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/archives">归档</b-nav-item>
            <b-nav-item href="/about">关于</b-nav-item>
            <b-nav-item href="/rss">订阅</b-nav-item>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="搜索"></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </headroom>

</template>
<script>
import { headroom } from 'vue-headroom'

export default {
  name: 'VHeader',
  components: {
    headroom
  }
}
</script>
<style>
  .navbar-brand img {
    width: auto;
    height: 22px;
    outline: 0
  }
</style>
