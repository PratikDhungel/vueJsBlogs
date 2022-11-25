import emailIcon from '../../assets/Icons/envelope-regular.svg';
import passwordIcon from '../../assets/Icons/lock-alt-solid.svg';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      isError: false,
      errorMessage: '',
      emailIcon,
      passwordIcon,
    };
  },
  methods: {
    handleSignInUser() {
      // Check for form errors
      if (!this.email && !this.password) {
        this.isError = true;
        this.errorMessage = 'Please fill out all the fields!';
        return;
      }

      // Reset errors
      this.isError = false;
      this.errorMessage = '';

      // Sign in with firebase
      const firebaseAuth = getAuth();

      signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
        .then(() => {
          // Redirect to home page after sign in
          this.$router.push({ name: 'HomeView' });
        })
        .catch((err) => {
          const errCode = err.code;
          this.isError = true;

          // Show message based on error code
          switch (errCode) {
            case 'auth/invalid-email':
              this.errorMessage = 'Invalid Email';
              break;
            case 'auth/user-not-found':
              this.errorMessage = 'Account with given email not found';
              break;
            case 'auth/wrong-password':
              this.errorMessage = 'Invalid Password';
              break;
            default:
              this.errorMessage = 'Error occurred while signing in';
          }
        });
    },
  },
};
