<template>
  <main role="main" class="App-main">
    <div class="Topstory">
      <b-container class="Topstory-container">
        <b-row>
          <b-col v-if="!loading&&data!=null" cols="8" class="Topstory-mainColumn">
            <v-content
              :display-type="displayType"
              :display-meta="displayMeta"
              :order-type="orderType"
              :data="data"
            />
          </b-col>
          <b-col>
            <side-bar v-if="!loading&&data!=null" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </main>
</template>
<script>
import SideBar from './components/SideBar/index'
import Content from './components/Content'
import { archive, category, tag, page } from '@/api/content'

export default {
  name: 'Home',
  components: { SideBar, vContent: Content },
  data() {
    return {
      displayType: 'index',
      displayMeta: '',
      orderType: '',
      data: [],
      loading: true
    }
  },
  created() {
    this.$store.dispatch('getOptions').then(() => {
      let pageNum = this.$route.params.id
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
        } else if (displayType === 'archive') {
          this.displayMeta = Number(this.$route.params.meta)
          this.byArchive(pageNum, pageSize)
        } else {
          this.byTag(pageNum, pageSize)
        }
      }
      this.loading = false
    })
  },
  methods: {
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
