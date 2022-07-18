import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDwNXTne17gHR-YqMV1uBUZGCR8RxCsi-Q",
    authDomain: "linkedin-clone-b53de.firebaseapp.com",
    projectId: "linkedin-clone-b53de",
    storageBucket: "linkedin-clone-b53de.appspot.com",
    messagingSenderId: "1003938640567",
    appId: "1:1003938640567:web:96fbed42a122093db35332"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;