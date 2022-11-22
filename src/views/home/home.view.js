import { BlogPost, BlogCard } from '@/components';

export default {
  name: 'HomeView',
  data() {
    return {
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
    };
  },
  components: {
    BlogPost,
    BlogCard,
  },
};
