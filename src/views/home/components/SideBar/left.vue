<template>
  <div>
    <div class="tech-square hidden-xs mb15">
      <a class="tech-square-item" href="/">
        <span class="tech-square-item-icon">
          <svg-icon icon-class="faxian" class="tech-square-item-icon" />
        </span>
        <span>最新内容</span>
      </a>
      <a class="tech-square-item " href="/hot">
        <span class="tech-square-item-icon">
          <svg-icon icon-class="guanzhu" class="tech-square-item-icon" />
        </span>
        <span>近期热门</span>
      </a>
      <a class="tech-square-item " href="/random">
        <span class="tech-square-item-icon">
          <svg-icon icon-class="dingwei" class="tech-square-item-icon" />
        </span>
        <span>为你推荐</span>
      </a>
    </div>
    <div class="tech-square hidden-xs mb15">
      <h5 class="tech-square-title mt0 mb15">其他社区</h5>
      <a class="tech-square-item " href="https://www.cnblogs.com/coderayu" target="_blank">
        <span class="tech-square-item-icon">
          <svg-icon :icon-class="getIcon()" class="tech-square-item-icon" />
        </span>
        <span>博客园</span>
      </a>
      <a class="tech-square-item " href="https://github.com/liuzhenyulive" target="_blank">
        <span class="tech-square-item-icon">
          <svg-icon :icon-class="getIcon()" class="tech-square-item-icon" />
        </span>
        <span>Github</span>
      </a>
    </div>
    <div class="tech-square hidden-xs">
      <h5 class="tech-square-title mt0 mb15">博客分类</h5>

      <a v-for="(category,index) in this.$store.state.options.hotCategories" :key="index" class="tech-square-item " :href="'/category/'+encodeURIComponent(category.name)+'/1'">
        <svg-icon :icon-class="getIcon()" class="tech-square-item-icon" />
        <span>{{ category.name.length>5?category.name.substring(5):category.name }}</span>
      </a>

      <a class="tech-square-item " href="/categories">
        <svg-icon icon-class="biaoqian" class="tech-square-item-icon" />
        <span>更多分类</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Left',
  data() {
    return {
      icons: ['anquan', 'biaoqian', 'dingwei', 'faxian', 'fenxiang', 'gouwu', 'gouwuche', 'guanzhu', 'huiyuan', 'naozhong', 'rili', 'shezhi', 'shoucang', 'shoucang1', 'shouye', 'sousuo', 'tixing', 'tupian', 'xiaoxi', 'youxiang', 'zhuanfa'] }
  },
  beforeCreate() {
    this.$store.dispatch('getOptions')
  },
  methods: {
    getIcon() {
      var index = Math.floor((Math.random() * this.icons.length))
      return this.icons[index]
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
</style>
