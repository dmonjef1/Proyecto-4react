
 import { initializeApp } from "firebase/app";
 import {getFirestore} from "firebase/firestore";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCDOe-WPMEMowYhbLY1vWnHE_dsAOrwZN8",
   authDomain: "proyecto-4react.firebaseapp.com",
   projectId: "proyecto-4react",
   storageBucket: "proyecto-4react.appspot.com",
   messagingSenderId: "917137000985",
   appId: "1:917137000985:web:9e7a7a13b71e27fd96b888"
 };

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)

