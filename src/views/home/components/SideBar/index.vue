<template>
  <div class="GlobalSideBar" data-za-detail-view-path-module="RightSideBar">
    <div>
      <div class="Sticky">
        <Blog />
        <WeChat id="WeChat" :style="{display:this.$store.state.app.sidebar.weChatOpen?'':'none'}" />
        <Menu />
        <notice />
        <SiteInfo />
        <Category />
        <tag />
        <Link /></Link>
      </div>
    </div>
  </div>
</template>
<script>
import Blog from './Blog'
import Menu from './Menu'
import Notice from './Notice'
import SiteInfo from './SiteInfo'
import Tag from './Tag'
import Category from './Category'
import Link from './Link'
import WeChat from './WeChat'

export default {
  name: 'SideBar',
  comments: { Blog, Menu, Notice, SiteInfo, Tag, Category, Link, WeChat },
  components: { Notice, Link, Tag, Category, SiteInfo, Menu, Blog, WeChat }
}
</script>
<style>

</style>
