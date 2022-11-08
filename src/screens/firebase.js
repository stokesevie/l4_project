// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOIHAJ_ZkRzOaAPNXZIns9NvkWRiJQvCY",
  authDomain: "fir-auth-3d5b7.firebaseapp.com",
  projectId: "fir-auth-3d5b7",
  storageBucket: "fir-auth-3d5b7.appspot.com",
  messagingSenderId: "854301273919",
  appId: "1:854301273919:web:96ee1ff5cf58d0a518ad8a",
  measurementId: "G-11SY5ZB0KB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;