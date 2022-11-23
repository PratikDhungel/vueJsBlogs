import { BlogCard } from '@/components';

export default {
  name: 'BlogsView',
  components: {
    BlogCard,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit('toggleEditPost', payload);
      },
    },
  },
  beforeUnmount() {
    this.$store.commit('toggleEditPost', false);
  },
};
