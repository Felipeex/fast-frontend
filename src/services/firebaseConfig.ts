import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEgv51Fj02Qiy_CBdVe9K2aehFUtg3e3U",
  authDomain: "fast-delivery-b392b.firebaseapp.com",
  projectId: "fast-delivery-b392b",
  storageBucket: "fast-delivery-b392b.appspot.com",
  messagingSenderId: "329303913579",
  appId: "1:329303913579:web:177bb2bc4f577be7b0ed2e",
  measurementId: "G-C0GGPMHZM7",
};

const App = initializeApp(firebaseConfig);
export const Auth = getAuth(App);
