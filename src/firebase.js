// filepath: c:\Users\chand\Documents - Copy\coding\hackathon gdg\job portal\invisible-job-board\src\firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace the following configuration values with your own,
// and optionally load them from environment variables.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "<your-firebase-api-key-here>",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "<your-firebase-project-auth-domain>",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "<your-firebase-project-id>",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "<your-firebase-storage-bucket>",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "<your-firebase-messaging-sender-id>",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "<your-firebase-app-id>"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;