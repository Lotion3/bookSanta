import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyAH5UJnjQytNPod7QQDiFpEuZXuZfKcQ3s",
    authDomain: "book-santa-ea1a8.firebaseapp.com",
    projectId: "book-santa-ea1a8",
    storageBucket: "book-santa-ea1a8.appspot.com",
    messagingSenderId: "727569958789",
    appId: "1:727569958789:web:513a2b4422e76ca42966ec"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()