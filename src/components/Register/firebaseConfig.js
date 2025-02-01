import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeyC9wj45JuW6xaCoIPRyRZKFGGr-GiOs",
  authDomain: "react-team-project-e3fab.firebaseapp.com",
  databaseURL: "https://react-team-project-e3fab-default-rtdb.firebaseio.com",
  projectId: "react-team-project-e3fab",
  storageBucket: "react-team-project-e3fab.firebasestorage.app",
  messagingSenderId: "1065554260522",
  appId: "1:1065554260522:web:464a1284cc066136008953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export everything as a default object
// export {app,auth};
// export {createUserWithEmailAndPassword, signInWithEmailAndPassword };
// export { firebaseConfig };
export { app, auth, firebaseConfig, createUserWithEmailAndPassword, signInWithEmailAndPassword };