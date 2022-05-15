import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4NJudbtE0QrR7JGrDIizNA_8vfBZLgkQ",
  authDomain: "cool-schools.firebaseapp.com",
  projectId: "cool-schools",
  storageBucket: "cool-schools.appspot.com",
  messagingSenderId: "69454540441",
  appId: "1:69454540441:web:20a0f7ea818e094f7a1208",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
