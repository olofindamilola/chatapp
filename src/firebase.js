import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABFqll52x4iOVRIbjUKG7Z_VsrmMjP8Ck",
  authDomain: "chatapp-b91f7.firebaseapp.com",
  projectId: "chatapp-b91f7",
  storageBucket: "chatapp-b91f7.appspot.com",
  messagingSenderId: "384327211204",
  appId: "1:384327211204:web:fc01fb76ad7a8dbf871191"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()