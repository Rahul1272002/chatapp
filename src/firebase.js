import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyAXWOBxNX0JxN8p951TsJ_NMUq0U4VMypo",
//   authDomain: "chatapp-372f7.firebaseapp.com",
//   projectId: "chatapp-372f7",
//   storageBucket: "chatapp-372f7.appspot.com",
//   messagingSenderId: "585797709894",
//   appId: "1:585797709894:web:bffe928133c18b22ec9a47"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBm-o3o4PuXZej3WZQvkCZhokjq8w8EfRU",
  authDomain: "chat-cbde0.firebaseapp.com",
  projectId: "chat-cbde0",
  storageBucket: "chat-cbde0.appspot.com",
  messagingSenderId: "106301974293",
  appId: "1:106301974293:web:306a73b7dafea414e5eb1c"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();