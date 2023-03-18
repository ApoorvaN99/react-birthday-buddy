// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkr6IOdSquwboODC24UQRaclqKTUVvA74',
  authDomain: 'birthday-buddy-a5155.firebaseapp.com',
  projectId: 'birthday-buddy-a5155',
  storageBucket: 'birthday-buddy-a5155.appspot.com',
  messagingSenderId: '940553130917',
  appId: '1:940553130917:web:c6c42fb970f343490d4e4c',
  measurementId: 'G-NY3HMKPZR2',
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
