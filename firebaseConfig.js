// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence,initializeAuth} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBpuUMZGbKT6SKui_v3RZX00If0vusEC50",
  authDomain: "fir-chat-a4faa.firebaseapp.com",
  projectId: "fir-chat-a4faa",
  storageBucket: "fir-chat-a4faa.appspot.com",
  messagingSenderId: "270996651704",
  appId: "1:270996651704:web:fb8c6cd633028c51797e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence : getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');