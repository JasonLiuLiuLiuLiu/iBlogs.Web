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
  import {archive, category, tag, page} from '~/api/content'

  export default {
    name: 'index',
    validate({params}) {
      if (!params.id) {
        params.id = 1;
      }
      // 必须是number类型
      return /^\d+$/.test(params.id)
    },
    components: {right, left, vContent: content},
    async asyncData({store, params}) {
      let pageNum = params.id;
      let pageSize = store.state.options.options.PageSize;
      let response = await tag(params.tag, pageNum, pageSize);
      return {
        data: response.data,
        displayMeta: params.tag,
        displayType: 'tag',
        menuItems: [
          {
            text: '首页',
            href: '/'
          },
          {
            text: '所有标签',
            href: '/tags'
          },
          {
            text: params.tag,
            active: true
          }
        ]
      }
    },
    data() {
      return {
        displayType: '',
        displayMeta: '',
        data: [],
        loading: true,
        menuItems: [
          {
            text: '首页',
            href: '/'
          }]
      }
    },
    methods: {
      formatDate(time) {
        time = parseInt(time);
        const date = new Date(time);
        return dateFormat(date, 'yyyy年MM月dd日')
      },
      getContentsByNum(pageNum) {
        let pageSize = this.$store.state.options.options.PageSize;
        tag(this.displayMeta, pageNum, pageSize).then(response => {
          this.data = response.data;
        });
      }
    }
  }
</script>
<style>

</style>
