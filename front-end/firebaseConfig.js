// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth"; // Import signOut

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQesRi9zAFQQzlbntqGOIi5sqqUZ6S4jk",
  authDomain: "le-plaisir-55435.firebaseapp.com",
  projectId: "le-plaisir-55435",
  storageBucket: "le-plaisir-55435.firebasestorage.app",
  messagingSenderId: "37338830089",
  appId: "1:37338830089:web:c1fd1823c7fe7b652c2fd8",
  measurementId: "G-PVYW50MSRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // For authentication

// Export auth and signOut for use in other files
export { auth, app, analytics, signOut };
