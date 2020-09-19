<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="2" class="left d-none d-sm-block">
          <left/>
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
          <right/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import right from '~/components/SideBar/right'
  import left from '~/components/SideBar/left'
  import content from '~/components/content'
  import {dateFormat} from '~/utils/dateUtils'
  import {page} from '~/api/content'

  export default {
    name: 'index',
    components: {right, left, vContent: content},
    async asyncData(content) {
      let pageNum = 1;
      let pageSize = 10;
      let orderType = 'index';
      let response = await page(pageNum, pageSize, orderType);
      return {
        data: response.data
      }

    },
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
    },
    methods: {
      formatDate(time) {
        time = parseInt(time);
        const date = new Date(time);
        return dateFormat(date, 'yyyy年MM月dd日')
      },
      getContentsByNum(pageNum){

      }
    }
  }
</script>
<style>

</style>

