import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database"; 
=======
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
>>>>>>> 0ae1c8f2822219e7b8d9f5dc9724e6b7be4b134b
const firebaseConfig = {
  apiKey: "AIzaSyCeyC9wj45JuW6xaCoIPRyRZKFGGr-GiOs",
  authDomain: "react-team-project-e3fab.firebaseapp.com",
  databaseURL: "https://react-team-project-e3fab-default-rtdb.firebaseio.com",
  projectId: "react-team-project-e3fab",
  storageBucket: "react-team-project-e3fab.firebasestorage.app",
  messagingSenderId: "1065554260522",
  appId: "1:1065554260522:web:464a1284cc066136008953"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); 

<<<<<<< HEAD
export { app, auth, firebaseConfig, createUserWithEmailAndPassword, signInWithEmailAndPassword, database };
=======
// Export everything as a default object
// export {app,auth};
// export {createUserWithEmailAndPassword, signInWithEmailAndPassword };
// export { firebaseConfig };
export { app, auth, firebaseConfig, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
>>>>>>> 0ae1c8f2822219e7b8d9f5dc9724e6b7be4b134b
