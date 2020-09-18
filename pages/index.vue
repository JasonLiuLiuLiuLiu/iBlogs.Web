<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="2" class="left d-none d-sm-block">
          <left />
        </b-col>
        <b-col md="7" class="middle">
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
          <right />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import right from '~/components/sidebar/right'
  import left from '~/components/sidebar/left'
  import content from '~/components/content'
  import { dateFormat } from '~/utils/dateUtils'

  export default {
    name: 'index',
    components: { right, left, vContent: content },
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
      this.orderType = this.$route.params.orderType == null ? 'index' : this.$route.params.orderType;
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
            }];
          break;
        case 'random':
          this.menuItems = [
            {
              text: '首页',
              href: '/'
            },
            {
              text: '为你推荐',
              active: true
            }];
          break
      }
      this.loadContents(this.$route.params.id)
    },
    methods: {
      formatDate(time) {
        time = parseInt(time);
        const date = new Date(time);
        return dateFormat(date, 'yyyy年MM月dd日')
      },
      getContentsByNum(pageNum) {
        this.loadContents(pageNum)
      },
      loadContents(pageNum) {


      }
    }
  }
</script>
<style>

</style>

