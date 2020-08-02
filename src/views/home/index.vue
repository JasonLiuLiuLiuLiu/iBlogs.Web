<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-md-2 left mt-2">
          <div class="router-box">
            <a class="router-box-item active" href="#">
              <b-icon icon="lightning" class="mr-2" />
              <span class="name">最新内容</span>
            </a>
            <a class="router-box-item " href="#">
              <b-icon icon="brightness-high" class="mr-2" />
              <span class="name">近期热门</span>
            </a>
            <a class="router-box-item " href="#">
              <b-icon icon="gear" class="mr-2" />
              <span class="name">为你推荐</span>
            </a>
          </div>

          <div class="tech-square hidden-xs mb15">
            <h5 class="tech-square-title mt0 mb15">其他社区</h5>
            <a class="tech-square-item " href="#" target="_blank">
              <span class="tech-square-item-icon">
                <b-icon icon="flag" variant="success" />
              </span>
              <span>博客园</span>
            </a>
            <a class="tech-square-item " href="https://github.com/liuzhenyulive" target="_blank">
              <span class="tech-square-item-icon">
                <b-icon icon="cloud" variant="success" />
              </span>
              <span>Github</span>
            </a>
          </div>

          <div class="tech-square hidden-xs">
            <h5 class="tech-square-title mt0 mb15">博客分类</h5>

            <a class="tech-square-item " href="/channel/frontend">
              <span class="tech-square-item-icon">
                <img src="https://avatar-static.segmentfault.com/399/739/3997397795-5a6edc1c3167f_small">
              </span>
              <span>前端</span>
            </a>

            <a class="tech-square-item " href="/channel/backend">
              <span class="tech-square-item-icon">
                <img src="https://avatar-static.segmentfault.com/199/890/1998904068-5a6edc3e40de1_small">
              </span>
              <span>后端</span>
            </a>

            <a class="tech-square-item " href="#">
              <b-icon icon="tags" class="tech-square-item-icon" variant="warning"/>
              <span>更多分类</span>
            </a>
          </div>
        </b-col>
        <b-col v-if="!loading&&data!=null" class="col-md-7 middle">
          <v-content
            :display-type="displayType"
            :display-meta="displayMeta"
            :order-type="orderType"
            :data="data"
          />
        </b-col>
        <b-col class="col-md-3 right mt-2">
          <div>
            <div class="alert alert-warning" role="alert">
              <a class="report" href="https://iblogs.site">欢迎访问我的网站</a>
            </div>
          </div>
          <div class="activity-recommend mb30">
            <div class="activity-title">通知公告</div>
            <div class="activity-recommend-area">
              <a class="activity-recommend-item" href="/e/1160000023426476">
                <div class="activity-date pull-left">
                  <div class="activity-date-wrapper">
                    <div class="activity-date-up">SEP</div>
                    <div class="activity-date-down">19</div>
                  </div>
                </div>
                <div class="activity-detail">
                  <div class="activity-detail-title">Always coding,Always writing</div>
                  <span class="activity-detail-base" /><span class="dot">·</span>09-19&nbsp;&nbsp;周六<span
                    class="dot"
                  >·</span><span class="activity-state">内测中</span>
                </div>
              </a>
              <a class="activity-recommend-item" href="/e/1160000023426476">
                <div class="activity-date pull-left">
                  <div class="activity-date-wrapper">
                    <div class="activity-date-up">SEP</div>
                    <div class="activity-date-down">19</div>
                  </div>
                </div>
                <div class="activity-detail">
                  <div class="activity-detail-title">Always coding,Always writing</div>
                  <span class="activity-detail-base" /><span class="dot">·</span>09-19&nbsp;&nbsp;周六<span
                    class="dot"
                  >·</span><span class="activity-state">内测中</span>
                </div>
              </a>
            </div>
          </div>
          <div class="activity-recommend mb30">
            <div class="activity-title">博客信息</div>
            <div class="activity-recommend-area">
              <ul class="list-group">
                <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg></span> <span
                  class="badge
           pull-right"
                >239</span>文章数目</li>
                <li class="list-group-item activity-recommend-item"> <span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></span>
                  <span
                    class="badge
           pull-right"
                  >7093</span>评论数目</li>
                <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></span>
                  <span
                    class="badge
           pull-right"
                  >4年63天</span>运行天数</li>
                <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></span> <span
                  class="badge
           pull-right"
                >1 天前</span>最后活动</li>
              </ul>
            </div>
          </div>
          <div class="activity-recommend mb30">
            <div class="activity-title">标签云</div>
            <div class="activity-recommend-area">
              <div class="tags l-h-2x">
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="时候">时候</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="喜欢">喜欢</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="生活">生活</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="事情">事情</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="代码">代码</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="内容">内容</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="文章">文章</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="博客">博客</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="效果">效果</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="高中">高中</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="办法">办法</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="文件">文件</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="学校">学校</a>
                <a href="#" class="label badge" title="" data-toggle="tooltip" data-original-title="主题">主题</a>
              </div>
            </div>
          </div>
          <div class="activity-recommend mb30">
            <div class="activity-title">友情链接</div>
            <div class="activity-recommend-area">
              <a class="activity-recommend-item" href="/e/1160000023426476">
                <div class="activity-date pull-left">
                  <div class="activity-date-wrapper">
                    <div class="activity-date-up">SEP</div>
                    <div class="activity-date-down">19</div>
                  </div>
                </div>
                <div class="activity-detail">
                  <div class="activity-detail-title">Always coding,Always writing</div>
                  <span class="activity-detail-base" /><span class="dot">·</span>09-19&nbsp;&nbsp;周六<span
                    class="dot"
                  >·</span><span class="activity-state">内测中</span>
                </div>
              </a>
            </div>
          </div>
          <div style="margin-top: 0;">
            <a target="_blank" href="https://iblogs.site/">联系合作</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import SideBar from './components/SideBar/index'
import Content from './components/Content'
import { archive, category, tag, page } from '@/api/content'

export default {
  name: 'Home',
  components: { SideBar, vContent: Content },
  data() {
    return {
      displayType: 'index',
      displayMeta: '',
      orderType: '',
      data: [],
      loading: true
    }
  },
  created() {
    this.$store.dispatch('getOptions').then(() => {
      let pageNum = this.$route.params.id
      const pageSize = this.$store.state.options.options.PageSize
      if (!pageNum) {
        pageNum = 1
      }
      if (!this.$route.params.type) {
        this.getContents(pageNum, pageSize)
      } else {
        const displayType = this.$route.params.type
        const meta = this.$route.params.meta
        this.displayType = displayType
        this.displayMeta = meta
        if (displayType === 'category') {
          this.byCategory(pageNum, pageSize)
        } else if (displayType === 'archive') {
          this.displayMeta = Number(this.$route.params.meta)
          this.byArchive(pageNum, pageSize)
        } else {
          this.byTag(pageNum, pageSize)
        }
      }
      this.loading = false
    })
  },
  methods: {
    getContents(pageNum, pageSize) {
      page(pageNum, pageSize).then(response => {
        this.data = response.data
      })
    },
    byCategory(pageNum, pageSize) {
      category(this.displayMeta, pageNum, pageSize).then(
        response => {
          this.data = response.data
        }
      )
    },
    byTag(pageNum, pageSize) {
      tag(this.displayMeta, pageNum, pageSize).then(
        response => {
          this.data = response.data
        }
      )
    },
    byArchive(pageNum, pageSize) {
      archive(this.displayMeta, pageNum, pageSize).then(
        response => {
          this.data = response.data
        }
      )
    }
  }
}
</script>
<style>
  .list-group-item{
    border: 0;
  }
  .blog-info-icons {
    align-items: center;
    position: relative;
    float: left;
    margin: -10px 5px -10px 0;
    overflow: hidden;
    text-align: center;
    display: flex;
    height: 40px;
  }
  .blog-info-icons svg {
    vertical-align: middle;
    width: 13px;
    height: 13px;
  }
  .pull-right {
    float: right!important;
  }
  .left {
    color: #757575;
  }
  .left .router-box {
    margin-left: -10px;
    margin-bottom: 15px;
  }
  .left .router-box-item.active {
    background: #009A61;
    color: #fff;
    font-weight: 900;
  }
  .left .router-box-item {
    display: block;
    height: 34px;
    line-height: 34px;
    border-radius: 4px;
    padding-left: 10px;
    color: #757575;
    text-decoration: none;
    margin-bottom: 1px;
  }
  .left .router-box-item.active i, .left .router-box-item.active img {
    filter: brightness(0) invert(1);
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .left .tech-square {
    margin-left: -10px;
  }
  .left .tech-square-title {
    color: #212121;
    position: relative;
    display: inline-block;
    padding-left: 10px;
  }
  .left .tech-square-title::after {
    position: absolute;
    content: '';
    border-bottom: 1px solid #eee;
    width: 95px;
    margin-left: 5px;
    margin-top: 8px;
  }
  .left .tech-square-item-icon {
    width: 35px;
    text-align: center;
    color: #999;
  }
  .left .tech-square-item img {
    width: 16px;
    height: 16px;
  }
  .mt0, .mt-0 {
    margin-top: 0px !important;
  }
  h5, .h5 {
    font-size: 14px;
  }
  h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  .left .tech-square-item {
    height: 34px;
    display: flex;
    align-items: center;
    color: #757575;
    text-decoration: none;
    margin-bottom: 1px;
    border-radius: 4px;
  }
  .left .tech-square-item-icon {
    width: 35px;
    text-align: center;
    color: #999;
  }
  .mb15, .mb-15 {
    margin-bottom: 15px !important;
  }
  .mb30, .mb-30 {
    margin-bottom: 30px !important;
  }
  .right .activity-recommend .activity-title {
    font-size: 16px;
    font-weight: 500;
    color: #212121;
    margin-bottom: 15px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item:not(:last-child) {
    border-bottom: 1px dashed #eee;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-date-wrapper {
    width: 32px;
    height: 34px;
    background: #C8E9DE;
    border-radius: 2px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item:not(:last-child) {
    border-bottom: 1px dashed #eee;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item {
    display: block;
    text-decoration: none;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-date {
    color: #017E66;
    margin-right: 10px;
    margin-top: 3px;
    text-align: center;
  }
  .pull-left {
    float: left !important;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-date-wrapper {
    width: 32px;
    height: 34px;
    background: #C8E9DE;
    border-radius: 2px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-date-up {
    font-size: 12px;
    transform: scale(0.833);
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-date-down {
    font-size: 14px;
    border-radius: 2px;
    background: #EBF7F3;
    font-weight: 500;
    margin-top: -2px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-detail {
    color: #999;
    font-size: 12px;
    margin-left: 40px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-detail-title {
    color: #212121;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 2px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-detail-base {
    font-size: 12px;
    color: #999;
  }
  .dot {
    color: #999;
    font-weight: normal;
    padding: 0 5px;
  }
  .right .activity-recommend .activity-recommend-area .activity-recommend-item .activity-detail .activity-state {
    font-size: 12px;
    color: #F5A623;
  }
  .right .activity-title::after {
    position: absolute;
    content: '';
    border-bottom: 1px solid #eee;
    width: 95px;
    margin-left: 5px;
    margin-top: 8px;
  }
</style>
