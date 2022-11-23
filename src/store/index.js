import { createStore } from 'vuex';

export default createStore({
  state: {
    sampleBlogCards: [
      {
        id: 1,
        title: 'Blog Card #1',
        blogCoverPhoto: 'stock-1',
        blogDate: 'Nov 21, 2022',
      },
      {
        id: 2,
        title: 'Blog Card #2',
        blogCoverPhoto: 'stock-2',
        blogDate: 'Nov 21, 2022',
      },
      {
        id: 3,
        title: 'Blog Card #3',
        blogCoverPhoto: 'stock-3',
        blogDate: 'Nov 21, 2022',
      },
      {
        id: 4,
        title: 'Blog Card #4',
        blogCoverPhoto: 'stock-4',
        blogDate: 'Nov 21, 2022',
      },
    ],
    editPost: true,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
  },
  actions: {},
});
