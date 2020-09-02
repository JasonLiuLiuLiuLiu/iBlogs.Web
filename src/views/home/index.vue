<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="2" class="left d-none d-sm-block">
          <Left />
        </b-col>
        <b-col v-if="!loading&&data!=null" md="7" class="middle">
          <v-content
            :display-type="displayType"
            :display-meta="displayMeta"
            :order-type="orderType"
            :data="data"
            :menu-items="menuItems"
            @getContentsByNum="getContentsByNum"
          />
        </b-col>
        <b-col md="3" class="right">
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
    this.orderType = this.$route.params.orderType == null ? 'index' : this.$route.params.orderType
    switch (this.orderType) {
      case 'hot':
        this.menuItems = [
          {
            text: '首页',
            href: '/'
          },
          {
            text: '近期热门',
            active: true
          }]
        break
      case 'random':
        this.menuItems = [
          {
            text: '首页',
            href: '/'
          },
          {
            text: '为你推荐',
            active: true
          }]
        break
    }
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
      const pageSize = this.$store.state.options.options.PageSize
      if (!pageNum) {
        pageNum = 1
      }
      if (!this.$route.params.type) {
        this.getContents(pageNum, pageSize, this.orderType)
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
    },
    getContents(pageNum, pageSize, orderType) {
      page(pageNum, pageSize, orderType).then(response => {
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
