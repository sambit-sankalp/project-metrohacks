import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjhJGaRT5NNNLPJ3d9rcyMC7yvPDfbiKg',
  authDomain: 'project-metrohacks.firebaseapp.com',
  projectId: 'project-metrohacks',
  storageBucket: 'project-metrohacks.appspot.com',
  messagingSenderId: '415772301225',
  appId: '1:415772301225:web:ce117141a5c1dc3a7c56b8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const provider = GoogleAuthProvider();
