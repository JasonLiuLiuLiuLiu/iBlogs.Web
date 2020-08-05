<template>
  <div>
    <div class="router-box">
      <a class="router-box-item" href="/">
        <b-icon icon="lightning" class="mr-2" />
        <span class="name">最新内容</span>
      </a>
      <a class="router-box-item " href="/hot">
        <b-icon icon="brightness-high" class="mr-2" />
        <span class="name">近期热门</span>
      </a>
      <a class="router-box-item " href="/random">
        <b-icon icon="gear" class="mr-2" />
        <span class="name">为你推荐</span>
      </a>
    </div>
    <div class="tech-square hidden-xs mb15">
      <h5 class="tech-square-title mt0 mb15">其他社区</h5>
      <a class="tech-square-item " href="https://www.cnblogs.com/coderayu" target="_blank">
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

      <a class="tech-square-item " href="/category/frontend">
        <b-icon icon="display" class="tech-square-item-icon" variant="danger" />
        <span>前端</span>
      </a>

      <a class="tech-square-item " href="/category/backend">
        <b-icon icon="cloud-arrow-down" class="tech-square-item-icon" variant="success" />
        <span>后端</span>
      </a>

      <a class="tech-square-item " href="/categories">
        <b-icon icon="tags" class="tech-square-item-icon" variant="warning" />
        <span>更多分类</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Left'
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
