import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRRyCEzI7X-Dhma1pPQ7vUEdg71na6WcQ",
  authDomain: "fir-chat-app-cd76e.firebaseapp.com",
  projectId: "fir-chat-app-cd76e",
  storageBucket: "fir-chat-app-cd76e.appspot.com",
  messagingSenderId: "443423823690",
  appId: "1:443423823690:web:86a10ba7d2c94dc42693b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);