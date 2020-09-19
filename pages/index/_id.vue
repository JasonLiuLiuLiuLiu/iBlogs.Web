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
    validate({ params }) {
      if(!params.id){
        params.id=1;
      }
      // 必须是number类型
      return /^\d+$/.test(params.id)
    },
    components: {right, left, vContent: content},
    async asyncData({store,params}) {
      let pageNum = params.id;
      let pageSize = store.state.options.options.PageSize;
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
    methods: {
      formatDate(time) {
        time = parseInt(time);
        const date = new Date(time);
        return dateFormat(date, 'yyyy年MM月dd日')
      },
      getContentsByNum(pageNum){
        let pageSize = this.$store.state.options.options.PageSize;
        let orderType = 'index';
        page(pageNum, pageSize, orderType).then(response=>{
          this.data=response.data;
        });
      }
    }
  }
</script>
<style>

</style>

