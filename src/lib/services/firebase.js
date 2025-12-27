// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore"
import { z } from "zod"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_ANON_ID,
  // @ts-ignore
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // @ts-ignore
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // @ts-ignore
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // @ts-ignore
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // @ts-ignore
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
// @ts-ignore

// Zod email validation
const emailSchema = z.email()



const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const waitlistService = {
  async checkEmailExists(email) {
    const normalizedEmail = email.toLowerCase().trim()
    const ref = doc(db, "waitlist", normalizedEmail)
    const snap = await getDoc(ref)
    return snap.exists()
  },

  async addSignup({ email }) {
    const normalizedEmail = email.toLowerCase().trim()

    // Zod validation
    emailSchema.parse(normalizedEmail)

    await setDoc(doc(db, "waitlist", normalizedEmail), {
      email: normalizedEmail,
      createdAt: serverTimestamp(),
    })
  },
}