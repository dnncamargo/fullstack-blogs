import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfLxJzze0AIu188YgZeqrNPft7BOc6jmw",
    authDomain: "fullstack-blogs-96e01.firebaseapp.com",
    projectId: "fullstack-blogs-96e01",
    storageBucket: "fullstack-blogs-96e01.appspot.com",
    messagingSenderId: "898607162967",
    appId: "1:898607162967:web:1d13c0c150c26958412512"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase