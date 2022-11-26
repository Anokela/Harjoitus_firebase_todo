import firebase from 'firebase/compat';

const firebaseConfig = ({
    apiKey: "AIzaSyAFohIlh7r2HX2gskATJdF1-encG_EPuEM",
    authDomain: "react-native-todo-demo-83439.firebaseapp.com",
    projectId: "react-native-todo-demo-83439",
    storageBucket: "react-native-todo-demo-83439.appspot.com",
    messagingSenderId: "113026586980",
    appId: "1:113026586980:web:088984d8a802ec97728271",
    databaseURL: "https://react-native-todo-demo-83439-default-rtdb.europe-west1.firebasedatabase.app/"
});

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const ROOT_REF = '/todos/';