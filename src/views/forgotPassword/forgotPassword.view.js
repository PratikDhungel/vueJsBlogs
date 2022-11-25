import emailIcon from '../../assets/Icons/envelope-regular.svg';
import { Modal, Loading } from '@/components';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

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
    handleResetPassword() {
      this.isLoading = true;

      const firebaseAuth = getAuth();

      sendPasswordResetEmail(firebaseAuth, this.email)
        .then(() => {
          // Show success message
          this.modalMessage = 'If your account exists, you will receive an email';
        })
        .catch((err) => {
          const errCode = err.code;

          // Show message based on error code
          switch (errCode) {
            case 'auth/invalid-email':
              this.modalMessage = 'Invalid Email';
              break;
            default:
              this.modalMessage = 'Unable to send password reset email';
          }
        })
        .finally(() => {
          // Set loading false and open modal
          this.isLoading = false;
          this.isModalOpen = true;
        });
    },
    handleCloseModal() {
      this.isModalOpen = false;
      this.email = '';
    },
  },
};
