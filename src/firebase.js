import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBaMEQ5WdzeUqa-3MXudWnbJus40Uz71N8',
    authDomain: 'fir-crud-cdb0b.firebaseapp.com',
    projectId: 'fir-crud-cdb0b',
    storageBucket: 'fir-crud-cdb0b.appspot.com',
    messagingSenderId: '783386807238',
    appId: '1:783386807238:web:c768046058d4d493c4c0c7'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();