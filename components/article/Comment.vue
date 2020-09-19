<template>
  <div id="@article.Id" class="comment-container">
    <div id="comments" class="clearfix">
      <form v-if="content.allowComment" id="comment-form" method="post" target="#" class="comment-form">
        <b-row>
          <b-col>
            <input
              id="author"
              v-model="commentForm.author"
              name="author"
              maxlength="12"
              class="form-control input-control clearfix"
              placeholder="姓名 (*)"
              required
            >
          </b-col>
          <b-col>
            <input
              id="mail"
              v-model="commentForm.mail"
              type="email"
              name="mail"
              class="form-control input-control clearfix"
              placeholder="邮箱 (*)"
              required
            >
          </b-col>
          <b-col>
            <input
              id="url"
              v-model="commentForm.url"
              type="url"
              name="url"
              class="form-control input-control clearfix"
              placeholder="网址 (http://)"
            >
          </b-col>
        </b-row>

        <textarea
          id="textarea"
          v-model="commentForm.content"
          name="content"
          class="form-control"
          placeholder="客官,留下你的评论."
          required
          minlength="5"
          maxlength="2000"
        />
        <button type="button" class="submit" @click="saveComment(null)">提交</button>
      </form>

      <span v-else class="response">评论已关闭.</span>
      <div id="comment-top" />
      <ol v-for="comment in this.comments" class="comment-list border-0">
        <li :id="'li-comment-'+comment.id" class="comment-body comment-parent comment-odd">
          <div :id="'comment-'+comment.id">
            <div class="comment-view" onclick="">
              <div class="comment-header">
                <img class="avatar" src="" :title="comment.author" :src="comment.mailPic" width="80" height="80">
                <span class="comment-author"><a :href="comment.url" target="_blank" rel="external nofollow">{{ comment.author }}</a></span>
              </div>
              <div class="comment-content">
                <span class="comment-author-at" />
                <p>{{ comment.content }}</p>
              </div>
              <div class="comment-meta">
                <time class="comment-time">{{ comment.created|formatDate }}</time>
                <span class="comment-reply">
                  <a rel="nofollow" onclick="">回复</a>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ol>
      <b-card class="mb-0 border-0 text-center">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="totalPage" :value="pageNum" limit="10" use-router @change="getComments" />
      </b-card>
    </div>
  </div>
</template>
<script>
import { getComments, submitComment } from '@/api/comment'
import { dateFormat } from '@/utils/dateUtils'
import gravatar from 'gravatar'

export default {
  name: 'Comment',
  filters: {
    formatDate(time) {
      const date = new Date(time);
      return dateFormat(date, 'yyyy-MM-dd')
    }
  },
  props: ['content'],
  data() {
    return {
      commentForm: {
        parentId: null,
        contentId: this.content.id,
        author: null,
        mail: null,
        url: null,
        content: null
      },
      comments: [{
        id: null,
        content: null,
        created: null,
        url: null,
        author: null,
        mailPic: null,
        children: null
      }],
      pageNum: 1,
      pageSize: 10,
      totalPage: 1
    }
  },
  computed: {
    getPageNums: function() {
      let startIndex = this.pageNum - 2;
      if (startIndex < 1) {
        startIndex = 1
      }
      let endIndex = this.pageNum + 2;
      if (endIndex - startIndex < 4) {
        endIndex = startIndex + 4
      }
      if (endIndex > this.totalPage) {
        endIndex = this.totalPage
      }
      const nums = [1];
      for (let i = startIndex; i <= endIndex; i++) {
        if (i !== 1 && i !== this.totalPage) {
          nums.push(i)
        }
      }
      if (this.totalPage !== 1) {
        nums.push(this.totalPage)
      }
      return nums
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    saveComment: function(parentId) {
      this.commentForm.parentId = parentId == null ? null : parentId;
      submitComment(this.commentForm).then(response => {
        if (response.data === true) {
          document.getElementById('comment-form').reset();
          this.comments.unshift({
            id: 0,
            content: this.commentForm.content,
            created: new Date().getTime(),
            url: this.commentForm.url,
            author: this.commentForm.author,
            mailPic: gravatar.url(this.commentForm.mail, { s: '60', d: 'identicon' }),
            children: null
          });
          this.commentForm.parentId = null;
          this.commentForm.contentId = this.content.id;
          this.commentForm.author = null;
          this.commentForm.mail = null;
          this.commentForm.url = null;
          this.commentForm.content = null;
          document.querySelector('#comment-top').scrollIntoView(true)
        }
      })
    },
    getComments: function(pageNum) {
      this.pageNum = pageNum == null ? this.pageNum : pageNum;
      getComments(this.content.id, this.pageNum, this.pageSize).then(response => {
        this.comments = response.data.list;
        this.pageNum = response.data.pageNum;
        this.totalPage = response.data.totalPage
      })
    },
    linkGen(pageNum) {
      return `/article/${this.content.id}`
    },
    indexChanged(pageNum) {
      this.$emit('getContentsByNum', pageNum)
    }
  }
}
</script>
<style>
  .pagination {
    justify-content: center;
  }
</style>
<style scoped>
  input:focus,textarea:focus {
    outline: none 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
  .comment-view:hover .comment-meta .comment-reply {
    display: block
  }
  .comment-meta {
    font-size: 12px
  }

  .comment-meta .comment-reply {
    display: none;
    float: right
  }

  .comment-meta .comment-reply a {
    color: #eb5055 !important
  }

  .comment-view:hover .comment-meta .comment-reply {
    display: block
  }
  .comment-content {
    margin-bottom: 10px;
    color: #313131
  }
  .comment-header {
    display: inline-block;
    width: 100%
  }

  .comment-header .avatar {
    display: inline-block;
    float: left;
    width: 40px;
    height: 40px;
    border: 1px solid #eaeaea;
    border-radius: 50%
  }

  .comment-header .comment-author {
    font-size: 13px;
    line-height: 45px;
    display: inline-block;
    float: left;
    margin: 0 20px
  }

  .comment-header .comment-by-author a {
    color: #eb5055 !important
  }
  .comment-view {
    padding: 20px;
    cursor: pointer;
  }
  .comment-view:hover .comment-meta .comment-reply {
    display: block
  }
  .comment-parent {
    margin: 20px 0;
    border: 1px solid rgba(184,197,214,.2);
    border-radius: 3px;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);
    box-shadow: 0 1px 4px rgba(0,0,0,.04)
  }

  .comment-parent:last-child {
    margin: 20px 0 0
  }

  .comment-parent:first-child {
    margin: 0
  }
  .comment-parent > .comment-children .avatar {
    width: 34px;
    height: 34px;
    margin: 3px 0 0 3px
  }

  .comment-parent > .comment-children .comment-author-at {
    float: left;
    margin-right: 5px
  }

  .comment-parent > .comment-children .comment-content {
    margin: -3px 3px 10px
  }

  .comment-parent > .comment-children .comment-meta {
    margin: 0 3px
  }
  .comment-list {
    margin: 0;
    padding-left: 0;
    list-style-type: none
  }
  #comments .lists-navigator {
    margin: 20px 0
  }

  #comments .lists-navigator ol {
    margin: 20px 0;
    padding: 0 10px;
    list-style: none;
    text-align: center
  }

  #comments .lists-navigator ol li.current a {
    color: #eb5055
  }

  #comments .page-navigator {
    margin: 0
  }

  #comments a {
    color: #5f5f5f
  }

  #comments .response {
    font-size: 14px;
    font-weight: 400;
    display: block;
    padding: 30px 0 30px 20px;
    color: #5f5f5f
  }

  #comments .response a {
    color: #eb5055
  }
  .comment-form {
    position: relative;
    margin: 0 0 40px;
    padding: 10px 20px;
    border-radius: 3px;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);
    box-shadow: 0 1px 4px rgba(0,0,0,.04)
  }

  .comment-form .form-control {
    font-size: 13px;
    display: block;
    width: 100%;
    height: 34px;
    color: #313131;
    outline: 0
  }

  .comment-form textarea.form-control {
    overflow: hidden;
    height: 150px;
    padding: 10px 0;
    resize: none;
    border: none;
    border-radius: 0
  }

  .comment-form .input-control {
    float: left;
    width: 100%;
    border:none;
    border-bottom: 1px dashed #ddd;
    border-radius: 0
  }

  .comment-form .submit {
    font-size: 13px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: block;
    height: 32px;
    margin: 0 auto;
    padding: 0 20px;
    -webkit-transition-duration: .4s;
    transition-duration: .4s;
    text-align: center;
    color: #313131;
    border: 1px solid #f7f7f7;
    border-radius: 30px;
    background-color: #f7f7f7
  }

  .comment-form .submit:hover, .submit:active, .submit:active:focus, .submit:focus {
    color: #eb5055;
    border: 1px solid #eb5055;
    outline-style: none;
    background-color: #fff
  }

</style>
