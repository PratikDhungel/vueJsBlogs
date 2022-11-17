import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAAXziBRrDt9mVlGW7LN3_iaRjAunP5tSQ',

  authDomain: 'vuejsblogs-be79b.firebaseapp.com',

  projectId: 'vuejsblogs-be79b',

  storageBucket: 'vuejsblogs-be79b.appspot.com',

  messagingSenderId: '566636454103',

  appId: '1:566636454103:web:1f6a400941101f1ec51092',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
