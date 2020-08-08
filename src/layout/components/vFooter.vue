<template>
  <footer id="footer">
    <b-container>
      <b-row>
        <b-col md="4" class="meta-footer">
          <b-card class="border-0">
            <b-card-img src="/static/img/logo.png" alt="" class="logo" top />
            <b-card-img src="/static/img/upyun_logo5.png" alt="本站由又拍云加速" class="upyun-logo" top />

            <b-card-text class="mt-2 mb-0">
              Always coding , Always writing!
            </b-card-text>
            <b-card-text class="mt-2 mb-0">
              <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank">
                本站由 又拍云 提供CDN/云存储服务
              </a>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col md="4" class="meta-footer">
          <div class="h4"><b-icon class="h5 mb-1 mr-1" icon="heart" />关注博主</div>
          <div style="margin: 0 0">
            <div style="float:right;width:35%;"><img src="https://disk.iblogs.site/pic/coderayu.png" alt="阿宇"></div>
            <div style="margin-right:35%;padding-right:5px;" class="info-text">
              <p style="margin: 0 0">码农阿宇,深度技术,实用干货,扫码发车.</p>
              <p style="margin: 0 0">Scan code to start.</p></div>
          </div>
        </b-col>

        <b-col md="4" class="meta-footer">
          <div class="h4"><b-icon class="h5 mb-1 mr-1" icon="envelope" />联系博主</div>
          <div style="margin: 0 0">
            <div style="float:right;width:35%;"><img
              src="https://disk.iblogs.site/pic/liuzhenyu.png"
            ></div>
            <div style="margin-right:35%;padding-right:5px;" class="info-text"><p style="margin: 0 0">
              刘振宇,常年活动在杭州周边,欢迎扫描右边微信二维码与我联系.</p>
              <a
                style="margin: 0 0"
                href="mailto:liuzhenyulive@live.com?subject=Mail from iBlogs"
              >liuzhenyulive@live.com
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="copyright mb-3">
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
    <div id="fixedTools" class="hidden-xs hidden-sm">
      <a id="backtop" class="border-bottom" href="#">回顶部</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'VFooter'
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
    height: 30px;
    width: 120px;
  }
  .meta-footer .upyun-logo {
    height: 30px;
    width: 80px;
  }

  .meta-footer div img {
    height: 70px;
    width: 70px;
  }

  #footer a {
    color: #888;
  }

  #footer .copyright {
    text-align: center;
    font-size: 13px;
  }
</style>
