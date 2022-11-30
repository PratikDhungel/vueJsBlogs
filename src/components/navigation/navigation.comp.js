import menuIcon from '../../assets/Icons/bars-regular.svg';
import userIcon from '../../assets/Icons/user-alt-light.svg';
import adminIcon from '../../assets/Icons/user-crown-light.svg';
import signOutIcon from '../../assets/Icons/sign-out-alt-regular.svg';
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: 'Navigation',
  data() {
    return {
      isMobile: false,
      showMobileNav: false,
      windowWidth: null,
      isMenuOpen: false,
      menuIcon,
      userIcon,
      adminIcon,
      signOutIcon,
    };
  },
  methods: {
    checkScreenSize() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 750) {
        this.isMobile = true;
        return;
      }

      this.isMobile = false;
      this.showMobileNav = false;
    },
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    toggleProfileMenu(e) {
      // Only toggle when clicking on profile icon
      if (e.target === this.$refs.profile) {
        this.isMenuOpen = !this.isMenuOpen;
      }
    },
    signOutUser() {
      const firebaseAuth = getAuth();

      signOut(firebaseAuth).then(() => {
        window.location.reload();
      });
    },
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  },
  computed: {
    profileInitials() {
      return this.$store.state.profileInitials;
    },
    profileFullName() {
      return `${this.$store.state.profileFirstName} ${this.$store.state.profileLastName}`;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
