import emailIcon from '../../assets/Icons/envelope-regular.svg';
import passwordIcon from '../../assets/Icons/lock-alt-solid.svg';
import userIcon from '../../assets/Icons/user-alt-light.svg';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebaseApp from '@/firebase/firebaseInit';

export default {
  name: 'LoginView',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      isError: false,
      errorMessage: '',
      emailIcon,
      passwordIcon,
      userIcon,
    };
  },
  methods: {
    async handleRegisterUser() {
      if (
        !this.firstName &&
        !this.lastName &&
        !this.username &&
        !this.email &&
        !this.password
      ) {
        this.isError = true;
        this.errorMessage = 'Please fill out all the fields!';
        return;
      }

      const firebaseAuth = getAuth();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          firebaseAuth,
          this.email,
          this.password
        );

        const user = userCredential.user;

        const db = getFirestore(firebaseApp);

        const docRef = doc(db, 'users', user.uid);

        const userData = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        };

        await setDoc(docRef, userData);

        this.$router.push({ name: 'HomeView' });
      } catch (err) {
        console.log('Error occurred while registering user');
      }
    },
  },
};
