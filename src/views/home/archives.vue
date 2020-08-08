<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-md-2 left mt-2">
          <Left />
        </b-col>
        <b-col class="col-md-7 middle">
          <b-breadcrumb :items="items" class="mt-2" />
          <b-list-group class="mb-2">
            <b-list-group-item v-for="(archive,index) in list" :key="index" class="d-flex justify-content-between align-items-center" :href="'/archive/'+encodeURIComponent(archive.date)+'/1'">
              {{ archive.date|formatDate }}
              <b-badge variant="primary" pill>{{ archive.count }}</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col class="col-md-3 right mt-2">
          <Right />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Right from './components/SideBar/right'
import Left from './components/SideBar/left'
import { archives } from '@/api/content.js'
import { dateFormat } from '../../utils/dateUtils'

export default {
  name: 'Archives',
  components: { Right, Left },
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return dateFormat(date, 'yyyy年MM月dd')
    }
  },
  data() {
    return {
      list: [],
      items: [
        {
          text: '首页',
          href: '/'
        },
        {
          text: '文章归档',
          active: true
        }]
    }
  },
  created() {
    archives().then(response => {
      this.list = response.data
    })
  }
}
</script>
<style>

</style>
