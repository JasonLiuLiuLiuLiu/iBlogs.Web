<template>
  <b-container class="mt-5">
    <div itemscope itemtype="http://schema.org/Article">
      <div class="post-header">
        <h4 class="post-title">
          <a :href="'/article/'+(content.slug&&content.slug!=null?encodeURIComponent(content.slug):content.id)" style="color:#222;">{{
            content.title }}</a>
        </h4>
        <div class="post-data">
          <time :datetime="content.created|formatDate" itemprop="datePublished">发布于 {{ content.created|formatDate }}
          </time>
          / <span v-html="showCategory(content.categories)" /> / <a href="#comments">{{
            content.commentsNum==0?'没有评论':content.commentsNum+'条评论' }}</a>
          / {{ content.hits }} 浏览
        </div>
        <p class="post-tags"><span v-html="showTag(content.tags)" /></p>
      </div>
      <div class="output_wrapper">
        <span v-html="content.content" />
        <p class="post-info">
          本文由 <a href="">{{
            content.author==null||content.author==''?this.$store.state.options.options.Author:content.author }}</a> 创作，采用
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="external nofollow"
          >知识共享署名4.0</a> 国际许可协议进行许可<br>本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名<br>最后编辑时间为:
          {{ content.modified|formatDate }}
        </p>
      </div>
    </div>
  </b-container>

</template>
<script>
import { dateFormat } from '../../../utils/dateUtils'

export default {
  name: 'VContent',
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return dateFormat(date, 'yyyy-MM-dd')
    }
  },
  props: ['content'],
  methods: {
    showCategory(categories) {
      if (categories) {
        const arr = categories.split(',')
        let sbuf = ''
        for (const s in arr) {
          sbuf += '<a href="/category/' + encodeURIComponent(arr[s]) + '">' + arr[s] + '</a>'
        }
        return sbuf
      }
      return this.showCategory('默认分类')
    },
    showTag(tags) {
      if (tags) {
        const arr = tags.split(',')
        let sbuf = ''
        for (const c in arr) {
          sbuf += '<a href="/tag/' + encodeURIComponent(arr[c]) + '">' + arr[c] + '</a>'
        }
        return sbuf
      }
      return ''
    }
  }
}
</script>
<style type="text/css" id="markdown_preview_css">
  .output_wrapper pre code {
    font-family: Consolas, Inconsolata, Courier, monospace;
    display: block !important;
    white-space: pre !important;
    word-wrap: normal !important;
    word-break: normal !important;
    overflow: auto !important;
  }

  .output_wrapper a:hover {
    text-decoration: underline;
    color: rgb(0, 96, 100);
  }

  .output_wrapper figcaption {
    margin-top: 10px;
    text-align: center;
    color: rgb(153, 153, 153);
    font-size: 0.7em;
  }

  .output_wrapper pre code .linenum {
    padding-right: 20px;
    word-spacing: 0px;
  }

  .task-list-list {
    list-style-type: none;
  }

  .task-list-list.checked {
    color: rgb(62, 62, 62);
  }

  .task-list-list.uncheck {
    color: rgb(191, 193, 191);
  }

  .task-list-list .icon_uncheck, .task-list-list .icon_check {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  .task-list-list .icon_check::before {
    content: "√";
    border: 2px solid rgb(62, 62, 62);
    color: red;
  }

  .task-list-list .icon_uncheck::before {
    content: "x";
    border: 2px solid rgb(191, 193, 191);
    color: rgb(191, 193, 191);
  }

  .task-list-list .icon_check::before, .task-list-list .icon_uncheck::before {
    padding: 2px 8px 2px 5px;
    border-radius: 5px;
  }

  @media screen {
    .katex .mtable .vertical-separator {
      min-width: 1px;
    }

    .katex .mfrac .frac-line, .katex .overline .overline-line, .katex .underline .underline-line, .katex .hline, .katex .hdashline, .katex .rule {
      min-height: 1px;
    }
  }

  .output_wrapper pre code {
    display: -webkit-box !important;
  }

  .output_wrapper .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: rgb(63, 63, 63);
    color: rgb(220, 220, 220);
  }

  .output_wrapper .hljs-keyword, .output_wrapper .hljs-selector-tag, .output_wrapper .hljs-tag {
    color: rgb(227, 206, 171);
  }

  .output_wrapper .hljs-template-tag {
    color: rgb(220, 220, 220);
  }

  .output_wrapper .hljs-number {
    color: rgb(140, 208, 211);
  }

  .output_wrapper .hljs-variable, .output_wrapper .hljs-template-variable, .output_wrapper .hljs-attribute {
    color: rgb(239, 220, 188);
  }

  .output_wrapper .hljs-literal {
    color: rgb(239, 239, 175);
  }

  .output_wrapper .hljs-subst {
    color: rgb(143, 143, 143);
  }

  .output_wrapper .hljs-title, .output_wrapper .hljs-name, .output_wrapper .hljs-selector-id, .output_wrapper .hljs-selector-class, .output_wrapper .hljs-section, .output_wrapper .hljs-type {
    color: rgb(239, 239, 143);
  }

  .output_wrapper .hljs-symbol, .output_wrapper .hljs-bullet, .output_wrapper .hljs-link {
    color: rgb(220, 163, 163);
  }

  .output_wrapper .hljs-deletion, .output_wrapper .hljs-string, .output_wrapper .hljs-built_in, .output_wrapper .hljs-builtin-name {
    color: rgb(204, 147, 147);
  }

  .output_wrapper .hljs-addition, .output_wrapper .hljs-comment, .output_wrapper .hljs-quote, .output_wrapper .hljs-meta {
    color: rgb(127, 159, 127);
  }

  .output_wrapper .hljs-emphasis {
    font-style: italic;
  }

  .output_wrapper .hljs-strong {
    font-weight: bold;
  }

  .output_wrapper pre code {
    line-height: 15px;
    font-size: 11px;
    font-weight: normal;
    word-spacing: -3px;
    letter-spacing: 0px;
  }

  .output_wrapper {
    font-size: 15px;
    color: rgb(62, 62, 62);
    line-height: 1.8;
    word-spacing: 2px;
    letter-spacing: 2px;
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 20px 20px;
    background-position: center center;
  }

  .output_wrapper * {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0px;
    padding: 0px;
  }

  .output_wrapper p {
    margin: 1.7em 0px;
  }

  .output_wrapper h1, .output_wrapper h2, .output_wrapper h3, .output_wrapper h4, .output_wrapper h5, .output_wrapper h6 {
    font-weight: bold;
  }

  .output_wrapper h1 {
    font-size: 1.6em;
  }

  .output_wrapper h2 {
    font-size: 1.4em;
  }

  .output_wrapper h3 {
    font-size: 1.3em;
  }

  .output_wrapper h4 {
    font-size: 1.2em;
  }

  .output_wrapper h5 {
    font-size: 1em;
  }

  .output_wrapper h6 {
    font-size: 1em;
  }

  .output_wrapper h3 {
    border-bottom: 2px solid rgb(239, 112, 96);
    font-size: 1.3em;
  }

  .output_wrapper h3 span {
    display: inline-block;
    font-weight: normal;
    background: rgb(239, 112, 96);
    color: rgb(255, 255, 255);
    padding: 3px 10px 1px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    margin-right: 3px;
  }

  .output_wrapper h3::after {
    display: inline-block;
    content: " ";
    vertical-align: bottom;
    border-bottom: 36px solid rgb(239, 235, 233);
    border-right: 20px solid transparent;
  }

  .output_wrapper ul, .output_wrapper ol {
    padding-left: 32px;
  }

  .output_wrapper ul {
    list-style-type: disc;
  }

  .output_wrapper ol {
    list-style-type: decimal;
  }

  .output_wrapper li * {
  }

  .output_wrapper li {
    margin-bottom: 0.5em;
  }

  .output_wrapper .code_size_default {
    line-height: 18px;
    font-size: 14px;
    font-weight: normal;
    word-spacing: 0px;
    letter-spacing: 0px;
  }

  .output_wrapper .code_size_tight {
    line-height: 15px;
    font-size: 11px;
    font-weight: normal;
    word-spacing: -3px;
    letter-spacing: 0px;
  }

  .output_wrapper pre code {
    font-family: Consolas, Inconsolata, Courier, monospace;
    border-radius: 0px;
  }

  .output_wrapper blockquote {
    display: block;
    padding: 15px 15px 15px 1rem;
    font-size: 0.9em;
    margin: 1em 0px;
    color: rgb(0, 0, 0);
    border-left: 5px solid rgb(239, 112, 96);
    background: rgb(239, 235, 233);
    overflow: auto;
    overflow-wrap: normal;
    word-break: normal;
  }

  .output_wrapper blockquote p {
    margin: 0px;
  }

  .output_wrapper a {
    text-decoration: none;
    color: rgb(30, 107, 184);
    overflow-wrap: break-word;
  }

  .output_wrapper strong {
    font-weight: bold;
    color: rgb(233, 105, 0);
  }

  .output_wrapper em {
    color: rgb(98, 0, 234);
  }

  .output_wrapper del {
    font-style: italic;
    text-decoration: none;
    color: rgb(41, 98, 255);
  }

  .output_wrapper strong em {
    font-weight: bold;
    color: rgb(197, 17, 98);
  }

  .output_wrapper hr {
    height: 1px;
    margin: 1.5rem 0px;
    border-right: none;
    border-bottom: none;
    border-left: none;
    border-image: initial;
    border-top: 1px dashed rgb(165, 165, 165);
  }

  .output_wrapper code {
    overflow-wrap: break-word;
    padding: 2px 4px;
    border-radius: 4px;
    margin: 0px 2px;
    color: rgb(248, 35, 117);
    background: rgb(248, 248, 248);
  }

  .output_wrapper img {
    display: block;
    margin: 0px auto;
    max-width: 100%;
  }

  .output_wrapper figcaption {
    margin-top: 10px;
    text-align: center;
    color: rgb(153, 153, 153);
    font-size: 0.7em;
  }

  .output_wrapper table {
    display: table;
    width: 100%;
    text-align: left;
  }

  .output_wrapper tbody {
    border: 0px;
  }

  .output_wrapper table tr {
    border-width: 1px 0px 0px;
    border-right-style: initial;
    border-bottom-style: initial;
    border-left-style: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image: initial;
    border-top-style: solid;
    border-top-color: rgb(204, 204, 204);
    background-color: white;
  }

  .output_wrapper table tr:nth-child(2n) {
    background-color: rgb(248, 248, 248);
  }

  .output_wrapper table tr th, .output_wrapper table tr td {
    font-size: 1em;
    border: 1px solid rgb(204, 204, 204);
    padding: 0.5em 1em;
    text-align: left;
  }

  .output_wrapper table tr th {
    font-weight: bold;
    background-color: rgb(240, 240, 240);
  }

  .output_wrapper .katex-display {
    font-size: 1.22em;
  }

  .output_wrapper .katex {
    padding: 8px 3px;
  }

  .output_wrapper .katex-display > .katex {
    display: inline-block;
    text-align: center;
    padding: 3px;
  }

  .output_wrapper .katex img {
    display: inline-block;
    vertical-align: middle;
  }

  .output_wrapper a[href^="#"] sup {
    vertical-align: super;
    margin: 0px 2px;
    padding: 1px 3px;
    color: rgb(255, 255, 255);
    background: rgb(102, 102, 102);
    font-size: 0.7em;
  }

  .output_wrapper .task-list-list {
    list-style-type: none;
  }

  .output_wrapper .task-list-list.checked {
    color: rgb(62, 62, 62);
  }

  .output_wrapper .task-list-list.uncheck {
    color: rgb(191, 193, 191);
  }

  .output_wrapper .task-list-list .icon_uncheck, .output_wrapper .task-list-list .icon_check {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  .output_wrapper .task-list-list .icon_check::before {
    content: "√";
    border: 2px solid rgb(62, 62, 62);
    color: red;
  }

  .output_wrapper .task-list-list .icon_uncheck::before {
    content: "x";
    border: 2px solid rgb(191, 193, 191);
    color: rgb(191, 193, 191);
  }

  .output_wrapper .task-list-list .icon_check::before, .output_wrapper .task-list-list .icon_uncheck::before {
    padding: 2px 8px 2px 5px;
    border-radius: 5px;
  }

  .output_wrapper .toc {
    margin-left: 25px;
  }

  .output_wrapper .toc_item {
    display: block;
  }

  .output_wrapper .toc_left {
    margin-left: 25px;
  }

  body {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .post-title {
    font-size: 21px;
    color: #222;
  }
  .post-data, .post-data a {
    font-size: 12px;
    color: #5f5f5f;
  }
  .post-content p {
    font-size: 14px;
    word-wrap: break-word;
    word-break: break-word;
  }
  .post-tags {
    margin: 0;
    padding: 5px 0 15px;
    display: inherit
  }

  .post-tags a {
    font-size: 13px;
    font-weight: 600;
    display: inline-block;
    margin: 4px 8px 0 0;
    padding: 0 15px;
    -webkit-transition-duration: .4s;
    transition-duration: .4s;
    letter-spacing: 0
  }

  .post-tags a:nth-child(1n) {
    color: #fff;
    border: 1px solid #6fa3ef;
    border-radius: 15px;
    background: #6fa3ef
  }

  .post-tags a:nth-child(2n) {
    color: #fff;
    border: 1px solid #ff9800;
    border-radius: 15px;
    background: #ff9800
  }

  .post-tags a:nth-child(3n) {
    color: #fff;
    border: 1px solid #46c47c;
    border-radius: 15px;
    background: #46c47c
  }

  .post-tags a:nth-child(4n) {
    color: #fff;
    border: 1px solid #f9bb3c;
    border-radius: 15px;
    background: #f9bb3c
  }

  .post-tags a:nth-child(5n) {
    color: #fff;
    border: 1px solid #bc99c4;
    border-radius: 15px;
    background: #bc99c4
  }

  .post-tags a:nth-child(6n) {
    color: #fff;
    border: 1px solid #e8583d;
    border-radius: 15px;
    background: #e8583d
  }

  .post-tags a::before {
    content: '# '
  }

  .post-content .post-tags a:hover {
    color: #5f5f5f;
    border: 1px solid #f7f7f7;
    outline-style: none;
    background: #f7f7f7
  }
</style>
