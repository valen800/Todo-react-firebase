import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4LpsmOq2sNFxsW6cOeJe8hFWQuavk62E",
  authDomain: "todo-9b76e.firebaseapp.com",
  databaseURL: "https://todo-9b76e.firebaseio.com",
  projectId: "todo-9b76e",
  storageBucket: "todo-9b76e.appspot.com",
  messagingSenderId: "968038940973",
  appId: "1:968038940973:web:4e96569ff09ed756bdd3a4",
};

export default firebase.initializeApp(firebaseConfig);
