// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-74aVONYGGym5Nlq-7nSyp9ugDBJCME",
  authDomain: "house-marketplace-app-aca39.firebaseapp.com",
  projectId: "house-marketplace-app-aca39",
  storageBucket: "house-marketplace-app-aca39.appspot.com",
  messagingSenderId: "79714604392",
  appId: "1:79714604392:web:01d66279853ec55b7732dd"
};

initializeApp(firebaseConfig)
export const db = getFirestore()