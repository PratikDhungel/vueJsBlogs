import arrow from '../../assets/Icons/arrow-right-light.svg';

export default {
  name: 'BlogPost',
  props: {
    post: Object,
  },
  data() {
    return {
      arrow,
    };
  },
};
