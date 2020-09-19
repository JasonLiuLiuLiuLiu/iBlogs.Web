//https://zh.nuxtjs.org/guide/vuex-store/
import {getOptions} from '@/api/option'
import {categories, tags} from '@/api/metadata'

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
  'Author',
  'Description',
  'Keywords',
  'Slogan1',
  'Slogan2',
  'FriendlyLinks',
  'AvatarLink',
  'EmojiStatus'
];
export const actions = {
  async nuxtServerInit({commit}) {
    let option = await getOptions(keys);
    commit('options/SET_OPTIONS', option.data);
    let response = await categories(1, option.data.SideBarCategoriesCount);
    commit('options/SET_CATEGORIES', response.data.list);
    response = await tags(1, option.data.SideBarTagsCount);
    commit('options/SET_TAGS', response.data.list);
  }
};
