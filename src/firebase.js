// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO4b4MuOA1ZFH0KeQdJZPXFQm22r2X02s",
  authDomain: "todo-app-7fe7d.firebaseapp.com",
  projectId: "todo-app-7fe7d",
  storageBucket: "todo-app-7fe7d.appspot.com",
  messagingSenderId: "647630080000",
  appId: "1:647630080000:web:d160e52fd6db5f692670e5",
  measurementId: "G-8D9XSVFXTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)