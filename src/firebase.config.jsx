// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDP3m_L_hCOQJzNC1Xqj2vRPN-fJVdK3wM",
  authDomain: "proyecto-reactjs-4e38e.firebaseapp.com",
  projectId: "proyecto-reactjs-4e38e",
  storageBucket: "proyecto-reactjs-4e38e.appspot.com",
  messagingSenderId: "742066380502",
  appId: "1:742066380502:web:1855506002a0aa6030f377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)