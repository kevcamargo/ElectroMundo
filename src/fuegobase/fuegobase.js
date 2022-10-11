// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuN7AH2FKpx6BirsaIXzByHyv1DpGdzPE",
  authDomain: "electromundo-824b1.firebaseapp.com",
  projectId: "electromundo-824b1",
  storageBucket: "electromundo-824b1.appspot.com",
  messagingSenderId: "802892228071",
  appId: "1:802892228071:web:b24a72cbc3f15b443e0942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)