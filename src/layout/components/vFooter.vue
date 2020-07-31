<template>
  <b-card-footer id="footer" class="footer bg-white">
    <div class="footer-social">
      <div class="footer-container clearfix">
        <div class="social-list">
          <a class="social rss" target="_blank" href="/feed">RSS</a>
          <a class="social rss" target="_blank" href="/sitemap.xml">Site Map</a>
        </div>
      </div>
    </div>
    <div class="footer-meta">
      <b-card-group class="footer-container">
        <b-card class="meta-item meta-copyright">
          <div class="meta-copyright-info">
            <a href="https://github.com/liuzhenyulive/iblogs" class="info-logo">
              <img src="/static/img/logo.png" alt="">
            </a>
            <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" class="upyun-logo">
              <img src="/static/img/upyun_logo5.png" alt="本站由又拍云加速">
            </a>
            <div class="info-text">
              <p>Always coding,Always writing!</p>
              <p>
                <a href="http://iblogs.site">iblogs.site</a> | <a href="http://www.beian.gov.cn">赣ICP备18014060号-2</a>
              </p>
              <p>
                Powered by <a href="https://github.com/liuzhenyulive/iblogs" target="_blank">iBlogs</a> &copy; 2020 <a
                  href="https://github.com/liuzhenyulive"
                  target="_blank"
                >Liu, zhenyu</a>
              </p>
            </div>
          </div>
        </b-card>

        <b-card class="meta-item meta-posts">
          <span v-html="this.$store.state.options.options.FootContent1" />
        </b-card>

        <b-card class="meta-item meta-comments">
          <span v-html="this.$store.state.options.options.FootContent2" />
        </b-card>
      </b-card-group>
    </div>
  </b-card-footer>
</template>
<script>
export default {
  name: 'VFooter'
}
</script>
<style>

</style>
