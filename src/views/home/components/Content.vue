<template>
  <div>
    <b-nav tabs>
      <b-nav-item>热度</b-nav-item>
      <b-nav-item>时间</b-nav-item>
      <b-nav-item>随机</b-nav-item>
    </b-nav>
    <b-card v-for="content in data.list" class="mb-3">
      <b-card-title>{{ content.title }}</b-card-title>
      <b-card-text
        class="RichText ztext CopyrightRichText-richText"
        itemprop="text"
      >
        {{ content.content }}...
      </b-card-text>
      <b-link
        class="mr-2"
        :href="'/article/'+(content.slug&&content.slug!=null?encodeURIComponent(content.slug):content.id)"
      >
        阅读全文
      </b-link>
      <b-link
        class="mr-2"
        :href="'/article/'+(content.slug&&content.slug!=null?encodeURIComponent(content.slug):content.id)+'#comment'"
      >
        评论({{ content.commentsNum }})
      </b-link>
      <b-link
        class="mr-2"
        :href="'/article/'+(content.slug&&content.slug!=null?encodeURIComponent(content.slug):content.id)"
      >
        阅读({{ content.hits }})
      </b-link>

      <b-link class="mr-2">
        {{ content.created | formatDate }}
      </b-link>

    </b-card>
    <div class="overflow-auto">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router />
    </div>
    <div v-if="displayType=='index'" class="lists-navigator clearfix">
      <ol class="page-navigator">
        <li v-if="data.pageNum>1" class="prev"><a :href="'/index/'+(data.pageNum-1)">←</a></li>
        <li v-for="index in getPageNums" :class="index==data.pageNum?'current':''"><a
          :href="'/index/'+index"
        >{{ index }}</a>
        </li>
        <li v-if="data.pageNum<data.totalPage" class="next"><a :href="'/index/'+(data.pageNum+1)">→</a></li>
      </ol>
    </div>
    <div v-else class="lists-navigator clearfix">
      <ol class="page-navigator">
        <li v-if="data.pageNum>1" class="prev"><a
          :href="'/'+displayType+'/'+encodeURIComponent(displayMeta)+'/'+(data.pageNum-1)"
        >←</a></li>
        <li v-for="index in getPageNums" :class="index==data.pageNum?'current':''"><a
          :href="'/'+displayType+'/'+encodeURIComponent(displayMeta)+'/'+index"
        >{{ index }}</a>
        </li>
        <li v-if="data.pageNum<data.totalPage" class="next"><a
          :href="'/'+displayType+'/'+encodeURIComponent(displayMeta)+'/'+(data.pageNum+1)"
        >→</a></li>
      </ol>
    </div>
  </div>
</template>
<script>

import { dateFormat } from '../../../utils/dateUtils'

export default {
  name: 'Content',
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return dateFormat(date, 'yyyy-MM-dd')
    }
  },
  props: ['displayType', 'displayMeta', 'orderType', 'data'],
  computed: {
    getPageNums: function() {
      let startIndex = this.data.pageNum - 2
      if (startIndex < 1) {
        startIndex = 1
      }
      let endIndex = this.data.pageNum + 2
      if (endIndex - startIndex < 4) {
        endIndex = startIndex + 4
      }
      if (endIndex > this.data.totalPage) {
        endIndex = this.data.totalPage
      }
      const nums = [1]
      for (let i = startIndex; i <= endIndex; i++) {
        if (i !== 1 && i !== this.data.totalPage) {
          nums.push(i)
        }
      }
      nums.push(this.data.totalPage)
      return nums
    }
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
</script>
<style>

</style>
