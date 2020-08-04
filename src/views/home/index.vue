<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-md-2 left mt-2">
          <Left />
        </b-col>
        <b-col v-if="!loading&&data!=null" class="col-md-7 middle">
          <v-content
            :display-type="displayType"
            :display-meta="displayMeta"
            :order-type="orderType"
            :data="data"
            :menu-items="menuItems"
            @getContentsByNum="getContentsByNum"
          />
        </b-col>
        <b-col class="col-md-3 right">
          <Right />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Right from './components/SideBar/right'
import Left from './components/SideBar/left'
import Content from './components/Content'
import { archive, category, tag, page } from '@/api/content'
import { dateFormat } from '../../utils/dateUtils'

export default {
  name: 'Home',
  components: { Right, Left, vContent: Content },
  data() {
    return {
      displayType: 'index',
      displayMeta: '',
      orderType: '',
      data: [],
      loading: true,
      menuItems: [
        {
          text: '首页',
          href: '/'
        },
        {
          text: '最新内容',
          active: true
        }]
    }
  },
  created() {
    this.loadContents(this.$route.params.id)
  },
  methods: {
    formatDate(time) {
      time = parseInt(time)
      const date = new Date(time)
      return dateFormat(date, 'yyyy年MM月dd日')
    },
    getContentsByNum(pageNum) {
      this.loadContents(pageNum)
    },
    loadContents(pageNum) {
      this.$store.dispatch('getOptions').then(() => {
        const pageSize = this.$store.state.options.options.PageSize
        if (!pageNum) {
          pageNum = 1
        }
        if (!this.$route.params.type) {
          this.getContents(pageNum, pageSize)
        } else {
          const displayType = this.$route.params.type
          const meta = this.$route.params.meta
          this.displayType = displayType
          this.displayMeta = meta
          if (displayType === 'category') {
            this.byCategory(pageNum, pageSize)
            this.menuItems = [
              {
                text: '首页',
                href: '/'
              },
              {
                text: '所有分类',
                href: '/categories'
              },
              {
                text: meta,
                active: true
              }]
          } else if (displayType === 'archive') {
            this.displayMeta = Number(this.$route.params.meta)
            this.byArchive(pageNum, pageSize)
            this.menuItems = [
              {
                text: '首页',
                href: '/'
              },
              {
                text: '文章归档',
                href: '/archives'
              },
              {
                text: this.formatDate(meta),
                active: true
              }]
          } else {
            this.byTag(pageNum, pageSize)
            this.menuItems = [
              {
                text: '首页',
                href: '/'
              },
              {
                text: '所有标签',
                href: '/tags'
              },
              {
                text: meta,
                active: true
              }]
          }
        }
        this.loading = false
      })
    },
    getContents(pageNum, pageSize) {
      page(pageNum, pageSize).then(response => {
        this.data = response.data
      })
    },
    byCategory(pageNum, pageSize) {
      category(this.displayMeta, pageNum, pageSize).then(
        response => {
          this.data = response.data
        }
      )
    },
    byTag(pageNum, pageSize) {
      tag(this.displayMeta, pageNum, pageSize).then(
        response => {
          this.data = response.data
        }
      )
    },
    byArchive(pageNum, pageSize) {
      archive(this.displayMeta, pageNum, pageSize).then(
        response => {
          this.data = response.data
        }
      )
    }
  }
}
</script>
<style>

</style>
