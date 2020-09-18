export const state = () => ({
  content: {
    allowComment: true,
    allowFeed: true,
    allowPing: true,
    author: null,
    categories: '默认分类',
    commentsNum: 0,
    content: '',
    created: '2019-09-11T05:13:00.028+0000',
    hits: 22,
    id: 1,
    modified: '2019-10-10T00:37:38.725+0000',
    slug: 'about',
    tags: null,
    thumbImg: null,
    title: '',
    pre: null,
    next: null
  }
});
export const mutations = {
  SET_CONTENT: (state, content) => {
    state.content = content
  }
};
