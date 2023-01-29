import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0UyafYbXm4z7XXBGNTNednWi8uM5gq3A",
    authDomain: "agri-x-15e86.firebaseapp.com",
    projectId: "agri-x-15e86",
    storageBucket: "agri-x-15e86.appspot.com",
    messagingSenderId: "755758709918",
    appId: "1:755758709918:web:3fc66ba2a264b285a84f8f",
    measurementId: "G-PHTBBF4SLR"
};

export default firebase.initializeApp(firebaseConfig)