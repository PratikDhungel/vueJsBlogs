import emailIcon from '../../assets/Icons/envelope-regular.svg';
import { Modal, Loading } from '@/components';

export default {
  name: 'ForgotPasswordView',
  components: {
    Modal,
    Loading,
  },
  data() {
    return {
      email: '',
      emailIcon,
      isModalOpen: false,
      modalMessage: '',
      isLoading: false,
    };
  },
  methods: {
    handleCloseModal() {
      this.isModalOpen = false;
      this.email = '';
    },
  },
};
