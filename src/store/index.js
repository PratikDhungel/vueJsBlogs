import { createStore } from 'vuex';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseApp from '@/firebase/firebaseInit';

export default createStore({
  state: {
    sampleBlogCards: [
      {
        id: 1,
        title: 'Blog Card #1',
        blogCoverPhoto: 'stock-1',
        blogDate: 'Nov 21, 2022',
      },
      {
        id: 2,
        title: 'Blog Card #2',
        blogCoverPhoto: 'stock-2',
        blogDate: 'Nov 21, 2022',
      },
      {
        id: 3,
        title: 'Blog Card #3',
        blogCoverPhoto: 'stock-3',
        blogDate: 'Nov 21, 2022',
      },
      {
        id: 4,
        title: 'Blog Card #4',
        blogCoverPhoto: 'stock-4',
        blogDate: 'Nov 21, 2022',
      },
    ],
    editPost: true,
    user: null,
    profileId: '',
    profileEmail: '',
    profileFirstName: '',
    profileLastName: '',
    profileUsername: '',
    profileInitials: '',
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, userInfo) {
      const firstName = userInfo.data().firstName;
      const lastName = userInfo.data().lastName;

      const firstNameInitials = firstName?.split('')?.[0]?.toUpperCase() || '';
      const lastNameInitials = lastName?.split('')?.[0]?.toUpperCase() || '';

      const profileInitials = firstNameInitials + lastNameInitials;

      state.profileId = userInfo;
      state.profileEmail = userInfo.data().email;
      state.profileFirstName = firstName;
      state.profileLastName = lastName;
      state.profileUsername = userInfo.data().username;
      state.profileInitials = profileInitials;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const firebaseAuth = getAuth();

      const currentUserUid = firebaseAuth.currentUser.uid;

      const db = getFirestore(firebaseApp);

      const docRef = doc(db, 'users', currentUserUid);

      const userInfo = await getDoc(docRef);

      commit('setProfileInfo', userInfo);
    },
  },
});
