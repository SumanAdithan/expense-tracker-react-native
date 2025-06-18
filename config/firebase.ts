// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDKMovCKiATVnKWZ55_DTei5kthyKyxV48',
    authDomain: 'expense-tracker-7f15c.firebaseapp.com',
    projectId: 'expense-tracker-7f15c',
    storageBucket: 'expense-tracker-7f15c.firebasestorage.app',
    messagingSenderId: '479131396500',
    appId: '1:479131396500:web:43cd1ca49277a686878781',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
