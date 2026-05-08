import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// ==========================================
// 🟢 DATABASE CONNECTED!
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC8Wkh81i0wfR1qxCO1zSNz3f8mIuK1DAo",
  authDomain: "arpits-exam-hub.firebaseapp.com",
  projectId: "arpits-exam-hub",
  storageBucket: "arpits-exam-hub.firebasestorage.app",
  messagingSenderId: "110326918692",
  appId: "1:110326918692:web:5088181cc70543ec16b2b1"
};

let app, auth, db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  console.error("Firebase not configured correctly. Check firebase-config.js", e);
}

export { auth, db };
