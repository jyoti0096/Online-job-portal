// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdPA-tqZRWxaFJORMG2YQcs1ND5hY6TMo",
  authDomain: "online-job-portal-ad9f1.firebaseapp.com",
  projectId: "online-job-portal-ad9f1",
  storageBucket: "online-job-portal-ad9f1.firebasestorage.app",
  messagingSenderId: "449502340629",
  appId: "1:449502340629:web:bd9b51d01ab0eef950d01c",
  measurementId: "G-XH2HCVFSEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};