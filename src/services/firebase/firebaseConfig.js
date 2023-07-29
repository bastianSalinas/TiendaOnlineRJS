// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52Xg5a53HvPWeLTsqQPVGwTHOBzBpdgw",
  authDomain: "proyectoformorehp.firebaseapp.com",
  projectId: "proyectoformorehp",
  storageBucket: "proyectoformorehp.appspot.com",
  messagingSenderId: "438453943385",
  appId: "1:438453943385:web:9d7bd08b0a247c268fc548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app) 