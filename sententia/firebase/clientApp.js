import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore as fgetFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
if (!firebase.apps.length) {
    const app = firebase.initializeApp(clientCredentials);
}

// module.exports = {
//     app,
//     db,
//     firebase,
//     auth
// }
export default firebase;