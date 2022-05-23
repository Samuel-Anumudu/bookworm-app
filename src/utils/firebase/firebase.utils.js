// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYuhDigqDEp-Qtgcc2QYNeYT6Vo3-EBYE',
  authDomain: 'bookworm-store-db.firebaseapp.com',
  projectId: 'bookworm-store-db',
  storageBucket: 'bookworm-store-db.appspot.com',
  messagingSenderId: '45152295002',
  appId: '1:45152295002:web:98cc437941c9564a5a6063',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
