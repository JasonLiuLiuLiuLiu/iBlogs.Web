<template>
  <div>
    <v-Header />
    <app-main />
    <footer id="footer">
      <b-container>
        <b-row>
          <b-col cols="4" class="meta-footer">
            <b-card class="border-0">
              <b-card-img src="/static/img/logo.png" alt="" class="logo" top />
              <b-card-img src="/static/img/upyun_logo5.png" alt="本站由又拍云加速" class="logo" top />

              <b-card-text class="mt-2 mb-0">
                Always coding , Always writing!
              </b-card-text>
              <b-card-text class="mt-2 mb-0">
                <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank">
                  感谢又拍云提供CDN加速
                </a>
              </b-card-text>
            </b-card>
          </b-col>

          <b-col cols="4" class="meta-footer">
            <span v-html="this.$store.state.options.options.FootContent1" />
          </b-col>

          <b-col cols="4" class="meta-footer">
            <span v-html="this.$store.state.options.options.FootContent2" />
          </b-col>
        </b-row>
        <div class="copyright">
          <a href="https://github.com/liuzhenyulive/iblogs" target="_blank">iBlogs.site</a>
          ♥
          <a href="https://github.com/liuzhenyulive" target="_blank">ZhenYu.Liu</a>
          当前呈现版本 1.0.0
          <br>
          <a href="http://beian.miit.gov.cn" rel="nofollow">赣ICP备18014060号-2</a> &nbsp;
          <span class="ml5"><a href="https://opensource.org/licenses/MIT" target="_blank">License MIT</a></span>&nbsp;
          <span class="ml5"><a href="/sitemap.xml" target="_blank">Site Map</a></span>
        </div>
      </b-container>
    </footer>
    <div id="fixedTools" class="hidden-xs hidden-sm">
      <a id="backtop" class="border-bottom" href="#">回顶部</a>
    </div>
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
  #footer {
    border-top: 1px solid #EEE;
    padding: 40px 0;
    color: #888;
    line-height: 1.6;
    vertical-align: top;
  }

  .meta-footer {
    height: 160px;
  }

  .meta-footer .logo {
    height: 50px;
    width: 120px;
  }

  .meta-footer span img {
    height: 100px;
    width: 100px;
  }

  #footer a {
    color: #888;
  }

  #footer .copyright {
    text-align: center;
    font-size: 13px;
  }

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
