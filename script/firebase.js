// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1VPTBAnmEGpU4H-SqXAT8ePxCvPEWc0U",
  authDomain: "join-d678b.firebaseapp.com",
  projectId: "join-d678b",
  storageBucket: "join-d678b.appspot.com",
  messagingSenderId: "310141613359",
  appId: "1:310141613359:web:bb08c9e229cfc261405dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.app=app;
window.db=db;
window.doc=doc;
window.setDoc=setDoc;
window.getDocs=getDocs;
window.collection=collection;
window.deleteDoc=deleteDoc;