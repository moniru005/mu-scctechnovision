// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_DUW8kMKUQ-IsbCYiZ_h3SIKGgQyohZo",
    authDomain: "scctechnovision.firebaseapp.com",
    projectId: "scctechnovision",
    storageBucket: "scctechnovision.appspot.com",
    messagingSenderId: "299996103952",
    appId: "1:299996103952:web:35af771c3d65e17ecb1195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;