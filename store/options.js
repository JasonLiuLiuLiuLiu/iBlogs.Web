let loaded = false;
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
export const state =()=> ({

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
      Author: 'iBlogs',
      Keywords: '',
      Description: '',
      Slogan1: '',
      Slogan2: '',
      FriendlyLinks: '',
      AvatarLink: null,
      EmojiStatus: ''
    },
    hotTags: [],
    hotCategories: []
  });

export const mutations= {
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
    },
    SET_DESCRIPTION: (state, description) => {
      state.options.Description = description
    },
    SET_KEYWORDS: (state, keywords) => {
      state.options.Keywords = keywords
    }
  };
