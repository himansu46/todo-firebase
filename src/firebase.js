import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8MGcjInUaPLU0iDRqhc9iPUHoOZl8LJI",
  authDomain: "todo-list-d998a.firebaseapp.com",
  projectId: "todo-list-d998a",
  storageBucket: "todo-list-d998a.appspot.com",
  messagingSenderId: "884597396063",
  appId: "1:884597396063:web:6c397cc301e144cbd441ea",
  measurementId: "G-8YF0M03QSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
