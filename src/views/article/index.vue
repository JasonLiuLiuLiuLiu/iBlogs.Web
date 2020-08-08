<template>
  <b-container>
    <v-article :content="content" />
    <share
      :site-url="this.$store.state.options.options.SiteUrl"
      :content-id="content.id"
      :content-title="content.title"
    />
    <comment :content="content" />
  </b-container>
</template>

<script>
import vContent from './components/Content'
import Comment from './components/Comment'
import Share from './components/Share'
import { index } from '../../api/content'
import getPageTitle from '@/utils/get-page-title'

export default {
  name: 'Article',
  components: { Comment, Share, vArticle: vContent },
  data() {
    return {
      content: {
        author: null,
        categories: '默认分类',
        commentsNum: 0,
        content: '',
        created: '2019-09-11T05:13:00.028+0000',
        hits: 22,
        id: 1,
        modified: '2019-10-10T00:37:38.725+0000',
        slug: 'about',
        tags: null,
        thumbImg: null,
        title: '关于'
      }
    }
  },
  created() {
    const slug = this.$route.params.slug
    this.getContent(slug)
  },
  methods: {
    getContent(url) {
      index(encodeURIComponent(url)).then(response => {
        this.content = response.data
        document.title = getPageTitle(this.content.title)
      })
    }
  }
}
</script>

<style>

</style>
