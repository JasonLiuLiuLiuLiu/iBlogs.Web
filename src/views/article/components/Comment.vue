<template>
  <div id="@article.Id" class="comment-container">
    <div id="comments" class="clearfix">
      <form v-if="content.allowComment" id="comment-form" method="post" target="#" class="comment-form">
        <input
          id="author"
          v-model="commentForm.author"
          name="author"
          maxlength="12"
          class="form-control input-control clearfix"
          placeholder="姓名 (*)"
          required
        >
        <input
          id="mail"
          v-model="commentForm.mail"
          type="email"
          name="mail"
          class="form-control input-control clearfix"
          placeholder="邮箱 (*)"
          required
        >
        <input
          id="url"
          v-model="commentForm.url"
          type="url"
          name="url"
          class="form-control input-control clearfix"
          placeholder="网址 (http://)"
        >
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
      <ol v-for="comment in this.comments" class="comment-list">
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
      <div class="lists-navigator clearfix">
        <ol class="page-navigator">
          <li v-if="comments.pageNum>1" class="prev"><a href="#comments">←</a></li>
          <li v-for="index in getPageNums" :class="index===comments.pageNum?'current':''"><a
            href="#comments"
          >{{ index }}</a>
          </li>
          <li v-if="comments.pageNum<comments.totalPage" class="next"><a href="#comments">→</a></li>
        </ol>

      </div>
    </div>
  </div>
</template>
<script>
import { getComments, submitComment } from '../../../api/comment'
import { dateFormat } from '../../../utils/dateUtils'
import gravatar from 'gravatar'

export default {
  name: 'Comment',
  filters: {
    formatDate(time) {
      const date = new Date(time)
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
      let startIndex = this.pageNum - 2
      if (startIndex < 1) {
        startIndex = 1
      }
      let endIndex = this.pageNum + 2
      if (endIndex - startIndex < 4) {
        endIndex = startIndex + 4
      }
      if (endIndex > this.totalPage) {
        endIndex = this.totalPage
      }
      const nums = [1]
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
      this.commentForm.parentId = parentId == null ? null : parentId
      submitComment(this.commentForm).then(response => {
        if (response.data === true) {
          document.getElementById('comment-form').reset()
          this.comments.unshift({
            id: 0,
            content: this.commentForm.content,
            created: new Date().getTime(),
            url: this.commentForm.url,
            author: this.commentForm.author,
            mailPic: gravatar.url(this.commentForm.mail, { s: '60', d: 'identicon' }),
            children: null
          })
          this.commentForm.parentId = null
          this.commentForm.contentId = this.content.id
          this.commentForm.author = null
          this.commentForm.mail = null
          this.commentForm.url = null
          this.commentForm.content = null
          document.querySelector('#comment-top').scrollIntoView(true)
        }
      })
    },
    getComments: function(pageNum) {
      this.pageNum = pageNum == null ? this.pageNum : pageNum
      getComments(this.content.id, this.pageNum, this.pageSize).then(response => {
        this.comments = response.data.list
        this.pageNum = response.data.pageNum
        this.totalPage = response.data.totalPage
      })
    }
  }
}
</script>
<style>

</style>
