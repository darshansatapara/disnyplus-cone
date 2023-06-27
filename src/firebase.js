import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAH2yt5T75cS0KxtUYyfBdyp3DwSEnBS1w",
    authDomain: "disneyplus-clone-d1e81.firebaseapp.com",
    projectId: "disneyplus-clone-d1e81",
    storageBucket: "disneyplus-clone-d1e81.appspot.com",
    messagingSenderId: "849880448999",
    appId: "1:849880448999:web:5e98feece199be3cca8742",
    measurementId: "G-QYBFM82DYC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;