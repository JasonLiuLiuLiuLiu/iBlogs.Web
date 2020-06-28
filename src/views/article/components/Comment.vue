<template>
  <div id="@article.Id" class="comment-container">
    <div id="comments" class="clearfix">

      <form method="post" id="comment-form" target="#" class="comment-form" v-if="content.allowComment">
        <input name="author" maxlength="12" id="author" class="form-control input-control clearfix" placeholder="姓名 (*)"
               required v-model="commentForm.author"/>
        <input type="email" name="mail" id="mail" class="form-control input-control clearfix" placeholder="邮箱 (*)"
               required v-model="commentForm.mail"/>
        <input type="url" name="url" id="url" class="form-control input-control clearfix" placeholder="网址 (http://)"
               v-model="commentForm.url"/>
        <textarea name="content" id="textarea" class="form-control" placeholder="客官,留下你的评论." required minlength="5"
                  maxlength="2000" v-model="commentForm.content"></textarea>
        <button type="button" class="submit" @click="saveComment(null)">提交</button>
      </form>

      <span class="response" v-else>评论已关闭.</span>


      <div id="comment-top"></div>
      <ol class="comment-list" v-for="comment in this.comments">
        <li :id="'li-comment-'+comment.id" class="comment-body comment-parent comment-odd">
          <div :id="'comment-'+comment.id">
            <div class="comment-view" onclick="">
              <div class="comment-header">
                <img class="avatar" src="" :title="comment.author" :src="comment.mailPic" width="80" height="80">
                <span class="comment-author"><a :href="comment.url" target="_blank" rel="external nofollow">{{comment.author}}</a></span>
              </div>
              <div class="comment-content">
                <span class="comment-author-at"></span>
                <p>{{comment.content}}</p>
              </div>
              <div class="comment-meta">
                <time class="comment-time">{{comment.created|formatDate}}</time>
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
          <li class="prev" v-if="comments.pageNum>1"><a href="#comments">←</a></li>
          <li :class="index===comments.pageNum?'current':''" v-for="index in getPageNums"><a
            href="#comments">{{index}}</a>
          </li>
          <li class="next" v-if="comments.pageNum<comments.totalPage"><a href="#comments">→</a></li>
        </ol>

      </div>
    </div>
  </div>
</template>
<script>
  import {getComments, submitComment} from "../../../api/comment";
  import {dateFormat} from "../../../utils/dateUtils";
  import gravatar from 'gravatar';

  export default {
    name: 'Comment',
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
    created() {
      this.getComments();
    },
    filters: {
      formatDate(time) {
        const date = new Date(time);
        return dateFormat(date, 'yyyy-MM-dd');
      }
    },
    computed: {
      getPageNums: function () {
        let startIndex = this.pageNum - 2;
        if (startIndex < 1) {
          startIndex = 1;
        }
        let endIndex = this.pageNum + 2;
        if (endIndex - startIndex < 4) {
          endIndex = startIndex + 4;
        }
        if (endIndex > this.totalPage) {
          endIndex = this.totalPage;
        }
        let nums = [1];
        for (let i = startIndex; i <= endIndex; i++) {
          if (i !== 1 && i !== this.totalPage) {
            nums.push(i)
          }
        }
        if (this.totalPage !== 1) {
          nums.push(this.totalPage);
        }
        return nums;
      }
    },
    methods: {
      saveComment: function (parentId) {
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
              mailPic: gravatar.url(this.commentForm.mail, {s: '60', d: 'identicon'}),
              children: null
            });
            this.commentForm.parentId = null;
            this.commentForm.contentId = this.content.id;
            this.commentForm.author = null;
            this.commentForm.mail = null;
            this.commentForm.url = null;
            this.commentForm.content = null;
            document.querySelector("#comment-top").scrollIntoView(true);
          }
        })
      },
      getComments: function (pageNum) {
        this.pageNum = pageNum == null ? this.pageNum : pageNum;
        getComments(this.content.id, this.pageNum, this.pageSize).then(response => {
          this.comments = response.data.list;
          this.pageNum = response.data.pageNum;
          this.totalPage = response.data.totalPage
        })
      }
    }
  }
</script>
<style>

</style>
