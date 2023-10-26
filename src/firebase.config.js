// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChYR3H1Kp_VsD-5bNfCQ_BSANlNv7LOeU",
  authDomain: "otp-react-791a5.firebaseapp.com",
  projectId: "otp-react-791a5",
  storageBucket: "otp-react-791a5.appspot.com",
  messagingSenderId: "846897442403",
  appId: "1:846897442403:web:600c5cbf5c894dbecc9256"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);
