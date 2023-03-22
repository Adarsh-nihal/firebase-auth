import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCfKuyjDjeGur5NVFMsyf8lYigXzxZgac",
  authDomain: "authentication-ae85a.firebaseapp.com",
  projectId: "authentication-ae85a",
  storageBucket: "authentication-ae85a.appspot.com",
  messagingSenderId: "154782194943",
  appId: "1:154782194943:web:f8c5215a4fbd772fdd00ca",
  measurementId: "G-03N8H8TBD0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
