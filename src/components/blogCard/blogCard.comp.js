import arrow from '../../assets/Icons/arrow-right-light.svg';
import edit from '../../assets/Icons/edit-regular.svg';
import trash from '../../assets/Icons/trash-regular.svg';

export default {
  name: 'BlogCard',
  props: ['post'],
  data() {
    return {
      arrow,
      edit,
      trash,
    };
  },
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
};
