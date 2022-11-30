import arrow from '../../assets/Icons/arrow-right.svg';
import arrowLight from '../../assets/Icons/arrow-right-light.svg';

export default {
  name: 'BlogPost',
  props: {
    post: Object,
  },
  data() {
    return {
      arrow,
      arrowLight,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
