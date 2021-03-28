// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCeofoS-cOz8IdJzEQC3gihtqPj2JPYFCw",
    authDomain: "netflix-clone-c0da9.firebaseapp.com",
    projectId: "netflix-clone-c0da9",
    storageBucket: "netflix-clone-c0da9.appspot.com",
    messagingSenderId: "450272725194",
    appId: "1:450272725194:web:29a84d36432c5cdacd8c33",
    measurementId: "G-0CRNBMNMDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //realtime firebase database
const auth = firebaseApp.auth();

export {
    auth
};
export default db;