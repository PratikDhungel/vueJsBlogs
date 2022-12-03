import { Modal } from '@/components';
import adminIcon from '../../assets/Icons/user-crown-light.svg';

export default {
  name: 'ProfileView',
  components: {
    Modal,
  },
  data() {
    return {
      adminIcon,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      isModalOpen: true,
      modalMessage: 'Changes saved successfully',
    };
  },
  methods: {
    updateProfile() {
      const updatedUserInfo = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
      };

      this.$store.dispatch('updateUserProfile', updatedUserInfo);
      this.isModalOpen = true;
    },
    handleCloseModal() {
      this.isModalOpen = false;
    },
  },
  watch: {
    // Update local state based on global state
    // Need to wait for firebase load
    '$store.state.profileFirstName': {
      handler() {
        this.firstName = this.$store.state.profileFirstName;
      },
      immediate: true,
    },
    '$store.state.profileLastName': {
      handler() {
        this.lastName = this.$store.state.profileLastName;
      },
      immediate: true,
    },
    '$store.state.profileUsername': {
      handler() {
        this.username = this.$store.state.profileUsername;
      },
      immediate: true,
    },
    '$store.state.profileEmail': {
      handler() {
        this.email = this.$store.state.profileEmail;
      },
      immediate: true,
    },
  },
  computed: {
    profileInitials() {
      return this.$store.state.profileInitials;
    },
  },
};
