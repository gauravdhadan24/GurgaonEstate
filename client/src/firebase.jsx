import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-245.firebaseapp.com",
  projectId: "real-estate-245",
  storageBucket: "real-estate-245.appspot.com",
  messagingSenderId: "281103781865",
  appId: "1:281103781865:web:6a04c75a7c72997df5c578"
};


export  const app = initializeApp(firebaseConfig);