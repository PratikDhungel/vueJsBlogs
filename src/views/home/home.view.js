import { BlogPost, BlogCard } from '@/components';
import arrow from '../../assets/Icons/arrow-right.svg';

export default {
  name: 'HomeView',
  data() {
    return {
      arrow,
      welcomeScreen: {
        title: 'Welcome!',
        blogPost:
          'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
        welcomeScreen: true,
        photo: 'coding',
      },
      sampleBlogPosts: [
        {
          id: 1,
          title: 'This is Filler Title',
          blogHTML: 'This is a filler blog spot title',
          blogCoverPhoto: 'beautiful-stories',
        },
        {
          id: 2,
          title: 'This is Filler Title',
          blogHTML: 'This is a filler blog spot title',
          blogCoverPhoto: 'designed-for-everyone',
        },
      ],
    };
  },
  components: {
    BlogPost,
    BlogCard,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
};
