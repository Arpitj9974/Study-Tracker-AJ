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
const obExam = document.getElementById('ob-exam');
const obStatus = document.getElementById('ob-status');
const obTargetDate = document.getElementById('ob-target-date');
const obBtn = document.getElementById('ob-btn');
const obError = document.getElementById('ob-error');

let currentUid = null;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUid = user.uid;
    obEmail.value = user.email || '';
    
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.selectedExam && obExam) {
          obExam.value = data.selectedExam;
        }
        if (data.onboardingComplete) {
          // Already onboarded, redirect to home
          window.location.href = 'index.html';
          return;
        }
      }
      
      // Not onboarded, show the form
      loadingOverlay.style.display = 'none';
      onboardingView.style.display = 'block';
    } catch (err) {
      console.error("Error fetching user data:", err);
      obError.textContent = "Error loading profile. Please try refreshing.";
      loadingOverlay.style.display = 'none';
      onboardingView.style.display = 'block';
    }
  } else {
    // Not logged in
    window.location.href = 'login.html';
  }
});

obForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  if (!currentUid) return;
  
  obBtn.disabled = true;
  obBtn.textContent = 'Saving Profile...';
  obError.textContent = '';
  
  const chosenExam = obExam ? obExam.value : null;

  const payload = {
    name: obName.value.trim(),
    age: parseInt(obAge.value, 10),
    mobile: obMobile.value.trim() || null,
    status: obStatus.value,
    targetExamDate: obTargetDate.value,
    onboardingComplete: true
  };
  
  if (chosenExam) {
    payload.selectedExam = chosenExam;
    localStorage.setItem('selectedExam', chosenExam);
    if (typeof window.setSelectedExam === 'function') {
      window.setSelectedExam(chosenExam);
    }
  }

  try {
    const userRef = doc(db, "users", currentUid);
    await setDoc(userRef, payload, { merge: true });
    
    // Successfully saved, go to hub
    window.location.href = 'index.html';
  } catch (err) {
    console.error("Error updating profile:", err);
    obError.textContent = "Failed to save profile. Please try again.";
    obBtn.disabled = false;
    obBtn.textContent = 'Complete Profile & Continue';
  }
});
