// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAEUy_D8y7EXPXCd__lRw9guhJrYBs6IPY",
  authDomain: "invoiceapp-63dc2.firebaseapp.com",
  projectId: "invoiceapp-63dc2",
  storageBucket: "invoiceapp-63dc2.firebasestorage.app",
  messagingSenderId: "1054306388251",
  appId: "1:1054306388251:web:68ef28a162ea0f5d172bbe",
  measurementId: "G-J9J5VETPBC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
