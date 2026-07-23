import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const loadingOverlay = document.getElementById('loading-overlay');
const onboardingView = document.getElementById('onboarding-view');
const obForm = document.getElementById('onboarding-form');
const obEmail = document.getElementById('ob-email');
const obName = document.getElementById('ob-name');
const obAge = document.getElementById('ob-age');
const obMobile = document.getElementById('ob-mobile');
const obStatus = document.getElementById('ob-status');
const obStream = document.getElementById('ob-stream');
const obBtn = document.getElementById('ob-btn');
const obError = document.getElementById('ob-error');
const obState = document.getElementById('ob-state');
const obCity = document.getElementById('ob-city');

let currentUid = null;
const FIRESTORE_TIMEOUT_MS = 5000;

function runWithTimeout(promise, errorMsg) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(errorMsg)), FIRESTORE_TIMEOUT_MS))
  ]);
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUid = user.uid;
    obEmail.value = user.email || '';
    
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await runWithTimeout(getDoc(userRef), "Checking onboarding state");
      
      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.onboardingComplete) {
          // Save state locally
          localStorage.setItem('onboardingComplete', 'true');
          window.location.href = 'index.html';
          return;
        }
      }
      
      // Not onboarded yet: display the form
      if (loadingOverlay) loadingOverlay.style.display = 'none';
      if (onboardingView) onboardingView.style.display = 'block';
    } catch (err) {
      console.error("[Onboarding] Fetch error or timeout, checking local storage:", err);
      const isLocallyOnboarded = localStorage.getItem('onboardingComplete') === 'true';
      if (isLocallyOnboarded) {
        window.location.href = 'index.html';
        return;
      }
      
      // Not onboarded locally, show the form
      if (loadingOverlay) loadingOverlay.style.display = 'none';
      if (onboardingView) onboardingView.style.display = 'block';
    }
  } else {
    // Session is unauthenticated, redirect to login page
    window.location.href = 'login.html';
  }
});

obForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  if (!currentUid) return;
  
  obBtn.disabled = true;
  obBtn.textContent = 'Saving Profile...';
  obError.textContent = '';
  
  const payload = {
    name: obName.value.trim(),
    age: parseInt(obAge.value, 10),
    mobile: obMobile.value.trim() || null,
    status: obStatus.value,
    stream: obStream ? obStream.value : '',
    state: obState ? obState.value.trim() : '',
    city: obCity ? obCity.value.trim() : '',
    activeExams: [],
    onboardingComplete: true
  };

  try {
    const userRef = doc(db, "users", currentUid);
    
    // Set basic profile fields in Firestore with timeout
    await runWithTimeout(setDoc(userRef, payload, { merge: true }), "Saving onboarding profile");
  } catch (err) {
    console.error("[Onboarding] Firestore profile save timed out/failed. Falling back to local mode:", err);
  }

  // Always write locally so the user is never stuck
  localStorage.setItem('activeExams', JSON.stringify([]));
  localStorage.removeItem('selectedExam');
  localStorage.setItem('onboardingComplete', 'true');
  
  // Redirect to the home dashboard
  window.location.href = 'index.html';
});
