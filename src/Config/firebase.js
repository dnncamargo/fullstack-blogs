import * as firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLxJzze0AIu188YgZeqrNPft7BOc6jmw",
  authDomain: "fullstack-blogs-96e01.firebaseapp.com",
  projectId: "fullstack-blogs-96e01",
  storageBucket: "fullstack-blogs-96e01.appspot.com",
  messagingSenderId: "898607162967",
  appId: "1:898607162967:web:1d13c0c150c26958412512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;