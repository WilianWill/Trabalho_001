import {
  initializeApp,
  getAuth,
  GoogleAuthProvider,
  singnInWithEmailAndPassword,
} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNC73rbGfdb2JEHkl1tKtkRc-p9BLNBwg",
  authDomain: "gaming-house-35019.firebaseapp.com",
  projectId: "gaming-house-35019",
  storageBucket: "gaming-house-35019.firebasestorage.app",
  messagingSenderId: "919752626087",
  appId: "1:919752626087:web:ee2040575e7fa28862b082",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
