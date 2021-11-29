import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIQOCa7b3_n-ls0SIZ1gleDl2f2wWhgOI",
  authDomain: "canauth-380c2.firebaseapp.com",
  projectId: "canauth-380c2",
  storageBucket: "canauth-380c2.appspot.com",
  messagingSenderId: "1016359657537",
  appId: "1:1016359657537:web:6ce9e64d8735681f75a6c0",
  measurementId: "G-J1FX64VM5Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
