import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNuK6hPiCgFFIIn2YZEV2zgpi7NTIoafo",
  authDomain: "react-auth-e4550.firebaseapp.com",
  projectId: "react-auth-e4550",
  storageBucket: "react-auth-e4550.appspot.com",
  messagingSenderId: "831395640188",
  appId: "1:831395640188:web:1e3e1c22eecbe6de6a2af9",
  measurementId: "G-NC3R4Q5DCP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
