<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-md-2 left mt-2">
          <Left />
        </b-col>
        <b-col class="col-md-7 middle">
          <b-breadcrumb :items="items" class="mt-2 pr-2 pb-2" />
          <b-list-group class="mb-2">
            <b-list-group-item v-for="(tag,index) in list" :key="index" class="d-flex justify-content-between align-items-center" :href="'/tag/'+encodeURIComponent(tag.name)+'/1'">
              {{ tag.name }}
              <b-badge variant="primary" pill>{{ tag.count }}</b-badge>
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
import { tags } from '@/api/metadata.js'

export default {
  name: 'Tags',
  components: { Right, Left },
  data() {
    return {
      total: 17,
      list: [],
      items: [
        {
          text: '首页',
          href: '/'
        },
        {
          text: '所有标签',
          active: true
        }]
    }
  },
  created() {
    tags(1, 10000).then(response => {
      this.total = response.data.total
      this.list = response.data.list
    })
  }
}
</script>
<style>

</style>
