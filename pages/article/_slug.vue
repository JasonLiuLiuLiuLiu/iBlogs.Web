<template>
  <b-container>
    <v-article :content="content"/>
    <share
      :site-url="this.$store.state.options.options.SiteUrl"
      :content-id="content.id"
      :content-title="content.title"
    />
    <comment :content="content"/>
  </b-container>
</template>

<script>
  import vContent from '@/components/Article/Content'
  import Comment from '@/components/Article/Comment'
  import Share from '@/components/Article/Share'
  import {index} from '@/api/content'

  export default {
    name: 'Article',
    components: {Comment, Share, vArticle: vContent},
    async asyncData({store, params}) {
      let slug = params.slug;
      let response = await index(slug);
      let content = response.data;
      store.commit('content/SET_CONTENT', content);
      if (content.tags) {
        store.commit('options/SET_KEYWORDS', content.tags)
      }
      if (content.description) {
        store.commit('options/SET_DESCRIPTION', content.description)
      }
      return {
        content: content
      }
    },
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
    }
  }
</script>
