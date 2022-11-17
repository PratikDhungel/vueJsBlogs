import menuIcon from '../../assets/Icons/bars-regular.svg';

export default {
  name: 'Navigation',
  data() {
    return {
      isMobile: false,
      showMobileNav: false,
      windowWidth: null,
      menuIcon,
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
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  },
};
