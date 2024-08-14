// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4dI4LbDUoAcoh6pbfUP3t7C3X1Vn382M",
  authDomain: "inventory-management-90748.firebaseapp.com",
  projectId: "inventory-management-90748",
  storageBucket: "inventory-management-90748.appspot.com",
  messagingSenderId: "313916092372",
  appId: "1:313916092372:web:27bd36f89fbc20e76b7041",
  measurementId: "G-1QJ6KFV8VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}