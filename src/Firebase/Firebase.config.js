
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB5m0NdCUVpDc3SXj_uttWChUg4Q7UOPjM",
  authDomain: "restaurant-management-f3524.firebaseapp.com",
  projectId: "restaurant-management-f3524",
  storageBucket: "restaurant-management-f3524.appspot.com",
  messagingSenderId: "409266746256",
  appId: "1:409266746256:web:f1fb7805a9aed60ca5f915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;