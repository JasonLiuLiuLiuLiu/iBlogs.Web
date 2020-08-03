<template>
  <div id="post-bottom-bar" class="post-bottom-bar">
    <div class="bottom-bar-inner">
      <div class="bottom-bar-items social-share left">
        <span class="bottom-bar-item">Share : </span>
        <span class="bottom-bar-item bottom-bar-facebook"><a
          :href="'https://www.facebook.com/sharer/sharer.php?u='+siteUrl+'/article/'+contentId"
          target="_blank"
          title="@Model.Content.Title"
          rel="nofollow"
        >facebook</a></span>
        <span class="bottom-bar-item bottom-bar-twitter"><a
          :href="'https://twitter.com/intent/tweet?url='+siteUrl+'/article/'+contentId+'&text='+encodeURIComponent(contentTitle)"
          target="_blank"
          title="@Model.Content.Title"
          rel="nofollow"
        >Twitter</a></span>
        <span class="bottom-bar-item bottom-bar-weibo"><a
          :href="'http://service.weibo.com/share/share.php?url='+siteUrl+'/article/'+contentId+'&amp;title='+encodeURIComponent(contentTitle)"
          target="_blank"
          title="@Model.Content.Title"
          rel="nofollow"
        >Weibo</a></span>
        <span class="bottom-bar-item bottom-bar-qrcode"><a
          :href="'https://cli.im/api/qrcode/code?text='+siteUrl+'/article/'+contentId"
          target="_blank"
          rel="nofollow"
        >QRSetCode</a></span>
      </div>
      <div class="bottom-bar-items">
        <span v-if="this.$store.state.content.content.pre!=null" class="bottom-bar-item"><a
          :href="'/article/'+this.$store.state.content.content.pre"
        >←</a></span>
        <span v-if="this.$store.state.content.content.next!=null" class="bottom-bar-item"><a
          :href="'/article/'+this.$store.state.content.content.next"
        >→</a></span>
        <span class="bottom-bar-item"><a href="#footer">↓</a></span>
        <span class="bottom-bar-item"><a href="#">↑</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Share',
  props: ['siteUrl', 'contentId', 'contentTitle']
}
</script>
<style>
  .post-bottom-bar {
    position: fixed;
    z-index: 2;
    right: 0;
    bottom: 0;
    left: 0;
    height: 48px;
    border-top: 1px solid #e0e0e0;
    background-color: #fff
  }

  .post-bottom-bar .bottom-bar-inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 10px
  }

  .post-bottom-bar .social-share {
    font-size: 14px;
    line-height: 48px;
    margin: 0 0 0 10px;
    color: #313131
  }

  .post-bottom-bar .bottom-bar-item a {
    font-size: 14px;
    line-height: 48px;
    margin: 0;
    padding: 12px;
    cursor: pointer;
    color: #313131;
    border: 0;
    background: 0 0
  }

  .post-bottom-bar .bottom-bar-item a:hover {
    color: #eb5055
  }

  .post-bottom-bar .social-share .bottom-bar-item {
    padding: 4px
  }

  .post-bottom-bar .social-share .bottom-bar-item a {
    font-size: 13px;
    padding: 4px 12px;
    -webkit-transition-duration: .4s;
    transition-duration: .4s;
    border-radius: 15px
  }

  .post-bottom-bar .social-share .bottom-bar-item a:hover {
    color: #5f5f5f;
    background-color: #f7f7f7
  }

  .post-bottom-bar .bottom-bar-item.bottom-bar-facebook a {
    color: #fff;
    background-color: #4267b2
  }

  .post-bottom-bar .bottom-bar-item.bottom-bar-twitter a {
    color: #fff;
    background-color: #1b95e0
  }

  .post-bottom-bar .bottom-bar-item.bottom-bar-weibo a {
    color: #fff;
    background-color: #db4437
  }

  .post-bottom-bar .bottom-bar-item.bottom-bar-qrcode a {
    color: #fff;
    background-color: #4caf50
  }

  .post-bottom-bar.animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
  }

  .post-bottom-bar.animated.pinned {
    -webkit-animation-name: pinned;
    animation-name: pinned
  }

  .post-bottom-bar.headroom--top {
    -webkit-animation-name: pinned;
    animation-name: pinned
  }

  .post-bottom-bar.animated.unpinned {
    -webkit-animation-name: unpinned;
    animation-name: unpinned
  }
  #fixedTools{
    display: none;
  }
</style>
