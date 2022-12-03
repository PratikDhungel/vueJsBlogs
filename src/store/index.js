import { createStore } from 'vuex';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
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
      state.profileId = userInfo.id;
      state.profileEmail = userInfo.data().email;
      state.profileFirstName = userInfo.data().firstName;
      state.profileLastName = userInfo.data().lastName;
      state.profileUsername = userInfo.data().username;
    },
    setProfileInitials(state) {
      const firstNameInitials =
        state.profileFirstName?.split('')?.[0]?.toUpperCase() || '';
      const lastNameInitials = state.profileLastName?.split('')?.[0]?.toUpperCase() || '';

      state.profileInitials = firstNameInitials + lastNameInitials;
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
      commit('setProfileInitials');
    },
    async updateUserProfile({ commit, state }, payload) {
      const db = getFirestore(firebaseApp);

      const docRef = doc(db, 'users', state.profileId);

      await updateDoc(docRef, payload);
      commit('setProfileInitials');
    },
  },
});
