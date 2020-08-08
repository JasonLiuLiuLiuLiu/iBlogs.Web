import { getOptions } from '@/api/option'
import { categories, tags } from '@/api/metadata'

let loaded = false
const keys = [
  'Announcement',
  'ContentCount',
  'CommentCount',
  'SiteInstallTime',
  'LastActiveTime',
  'SiteUrl',
  'PageSize',
  'SideBarCategoriesCount',
  'hotCategories',
  'SideBarTagsCount',
  'hotTags',
  'friendlyLinks',
  'Author'
]
const options = {
  state: {
    options: {
      Announcement: '通知公告',
      ContentCount: 0,
      CommentCount: 0,
      SiteInstallTime: '2020-01-01',
      LastActiveTime: '2020-01-01',
      SiteUrl: '/',
      PageSize: 10,
      SideBarCategoriesCount: 5,
      SideBarTagsCount: 5,
      Author: 'iBlogs'
    },
    friendlyLinks: [{ title: 'LiuZhenYu', link: 'https://github.com/liuzhenyulive' }],
    hotTags: [],
    hotCategories: []
  },
  mutations: {
    SET_OPTIONS: (state, options) => {
      state.options = options
    },
    SET_CATEGORIES: (state, categories) => {
      state.hotCategories = categories
    },
    SET_TAGS: (state, tags) => {
      state.hotTags = tags
    },
    SET_LINKS: (state, links) => {
      state.friendlyLinks = links
    }
  },
  actions: {
    getOptions({ commit }) {
      if (loaded) { return }
      loaded = true
      getOptions(keys).then(response => {
        commit('SET_OPTIONS', response.data)
        categories(1, response.data.SideBarCategoriesCount).then(response => {
          commit('SET_CATEGORIES', response.data.list)
        })
        tags(1, response.data.SideBarTagsCount).then(response => {
          commit('SET_TAGS', response.data.list)
        })
      })
    }
  }
}

export default options
