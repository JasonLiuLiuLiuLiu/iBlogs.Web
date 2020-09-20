<template>
  <div>
    <div>
      <div class="mt-2 alert alert-warning" role="alert">
        <div id="marquee">
          <a id="text">欢迎来到我的博客~~~</a>
        </div>
      </div>
    </div>
    <div class="activity-recommend mb30 profile-container" :hidden="!this.$store.state.options.options.AvatarLink">
      <div class="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
        <div class="position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0" style="z-index:4;">
          <div><img
            style="height:auto;"
            alt="Avatar"
            width="200"
            height="200"
            class="avatar avatar-user width-full border bg-white"
            :src="this.$store.state.options.options.AvatarLink"
          ></div>
          <div class="user-status-container position-relative hide-sm hide-md">
            <div class="d-flex user-status-circle-badge-container">

              <div
                class="p-2 d-block d-md-inline-block user-status-circle-badge lh-condensed-ultra"
                data-team-hovercards-enabled=""
              >
                <div class="d-flex flex-items-center flex-items-stretch">
                  <div class="user-status-emoji-container mr-2">
                    <div>
                      <div class="g-emoji">{{ this.$store.state.options.options.EmojiStatus }}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="block m-t-sm status-msg">
          <strong class="font-bold text-lt">{{ this.$store.state.options.options.Slogan1 }}</strong>
        </span>
        <span class="text-muted text-xs block status-msg">{{ this.$store.state.options.options.Slogan2 }}</span>
      </div>
    </div>
    <div class="activity-recommend mb30">
      <div class="activity-title">博客信息</div>
      <div class="activity-recommend-area">
        <ul class="list-group">
          <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-award"
          ><circle cx="12" cy="8" r="7"/><polyline
            points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
          /></svg></span> <span
            class="badge
           pull-right"
          >{{ this.$store.state.options.options.ContentCount }}</span>文章数目
          </li>
          <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-circle"
          ><path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          /></svg></span>
            <span
              class="badge
           pull-right"
            >{{ this.$store.state.options.options.CommentCount }}</span>评论数目
          </li>
          <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar"
          ><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line
            x1="16"
            y1="2"
            x2="16"
            y2="6"
          /><line
            x1="8"
            y1="2"
            x2="8"
            y2="6"
          /><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
            <span
              class="badge
           pull-right"
            >{{ this.$store.state.options.options.SiteInstallTime|formatDate }}</span>运行时间
          </li>
          <li class="list-group-item activity-recommend-item"><span class="blog-info-icons"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          ><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span> <span
            class="badge
           pull-right"
          >{{ this.$store.state.options.options.LastActiveTime|formatDate }}前</span>最后活动
          </li>
        </ul>
      </div>
    </div>
    <div class="activity-recommend mb30">
      <div class="activity-title">标签云</div>
      <div class="activity-recommend-area">
        <div class="tags l-h-2x">
          <a
            v-for="(tag,index) in this.$store.state.options.hotTags"
            :key="index"
            :href="'/tag/'+encodeURIComponent(tag.name)+'/1'"
            class="label badge"
          >{{ tag.name }}</a>
          <a href="/tags" class="label badge">更多</a>
        </div>
      </div>
    </div>
    <div class="activity-recommend mb30">
      <div class="activity-title">友情链接</div>
      <div class="activity-recommend-area">
        <div class="tags l-h-2x">
          <a
            v-for="(link,index) in this.$store.state.options.options.FriendlyLinks.split('||')"
            :key="index"
            :href="link.split('->')[1]"
            target="_blank"
            class="label badge"
          >{{ link.split('->')[0] }}</a>
          <a target="_blank" href="mailto:liuzhenyulive@live.com?subject=Mail from iBlogs" class="label badge">联系合作</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { timeago } from '~/utils/index.js'

  export default {
    name: 'Right',
    filters: {
      formatDate(time) {
        const date = new Date(time);
        return timeago(date.getTime())
      }
    },
    beforeCreate() {

    }
  }
</script>
<style>
  .profile-container:hover {
    background: url(https://disk.iblogs.site/img/snow.gif);
    background-size: cover;
    color: #999;
  }

  .status-msg {
    text-align: center;
  }

  .block {
    display: block;
  }

  .m-t-sm {
    margin-top: 10px;
  }

  .bg-dark .text-muted {
    color: #8b8e99 !important;
  }

  .text-xs {
    font-size: 12px;
  }

  .user-status-circle-badge-container {
    position: absolute;
    bottom: 0;
    left: 100%;
    z-index: 2;
    width: 38px;
    height: 38px;
    margin-bottom: 25px;
    margin-left: -50px;
  }

  .user-status-circle-badge-container:hover {
    width: auto;
    max-width: 544px;
  }

  .d-flex {
    display: flex !important;
  }

  .user-status-circle-badge {
    background-color: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 2em;
    box-shadow: 0 1px 0 rgba(27, 31, 35, .04);
  }

  .lh-condensed-ultra {
    line-height: 1 !important;
  }

  .d-flex {
    display: flex !important;
  }

  .flex-items-stretch {
    align-items: stretch !important;
  }

  .user-status-circle-badge-container .user-status-emoji-container {
    width: 20px;
    height: 20px;
    margin-right: 0 !important;
  }

  .g-emoji {
    font-family: Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, serif;
    font-size: 1em;
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    position: absolute;
    margin: auto;
    left: 11px;
    top: 12px;
  }

  .no-wrap {
    white-space: nowrap !important;
  }

  .f6 {
    font-size: 12px !important;
  }

  .text-gray-dark {
    color: #24292e !important;
  }

  .avatar-user {
    border-radius: 50% !important;
  }

  .lh-condensed-ultra {
    line-height: 1 !important;
  }

  .user-status-circle-badge-container:hover {
    width: auto;
    max-width: 544px;
  }

  :focus {
    outline: -webkit-focus-ring-color auto 1px;
  }

  @keyframes slide {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }

  @-webkit-keyframes slide {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }

  #marquee {
    width: 100%;
    height: 10px;
    line-height: 10px;
    overflow: hidden;
    position: relative;
  }

  #text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    font-size: 10px;
    animation-name: slide;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    -webkit-animation-name: slide;
    -webkit-animation-duration: 10s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }

  .right .report {
    position: absolute;
    top: 0;
    left: 100%;
    line-height: 30px;
    display: block;
    word-break: keep-all;
    text-overflow: ellipsis;
    white-space: nowrap;
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
