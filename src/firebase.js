import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBlE_JHf0qsrrL7o62IXLOKUHL9vT0A_AA",
  authDomain: "linkedin-clone-yt-d04d3.firebaseapp.com",
  projectId: "linkedin-clone-yt-d04d3",
  storageBucket: "linkedin-clone-yt-d04d3.appspot.com",
  messagingSenderId: "126398910763",
  appId: "1:126398910763:web:ffcce60917e91c2884f56e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};