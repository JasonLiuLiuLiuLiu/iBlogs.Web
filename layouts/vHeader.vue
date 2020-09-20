<template>
  <headroom>
    <b-navbar class="bg-light" style="">
      <b-container>
        <b-navbar-brand href="https://iblogs.site">
          <img src="~static/img/logo.png" alt="码农阿宇">
        </b-navbar-brand>
        <b-collapse id="navbarResponsive" class="collapse navbar-collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/archives">归档</b-nav-item>
            <b-nav-item href="/about">关于</b-nav-item>
            <b-nav-item href="/rss">订阅</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </headroom>
</template>
<script>
  import {headroom} from "vue-headroom";

  export default {
    name: 'vHeader',
    components: {
      headroom
    },
  };
</script>
<style>
  .navbar-brand img {
    height: 22px;
    outline: 0
  }
</style>
