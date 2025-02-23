// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIzYcKPS6Xd_IcRvecKHonsEFr9OccfMs",
  authDomain: "netflix-gpt-dbf5e.firebaseapp.com",
  projectId: "netflix-gpt-dbf5e",
  storageBucket: "netflix-gpt-dbf5e.firebasestorage.app",
  messagingSenderId: "543002052734",
  appId: "1:543002052734:web:732c9a5b26e48d47b5b02f",
  measurementId: "G-ZXLEH8Z9H1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
