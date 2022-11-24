import emailIcon from '../../assets/Icons/envelope-regular.svg';
import passwordIcon from '../../assets/Icons/lock-alt-solid.svg';
import userIcon from '../../assets/Icons/user-alt-light.svg';

export default {
  name: 'LoginView',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      emailIcon,
      passwordIcon,
      userIcon,
    };
  },
};
