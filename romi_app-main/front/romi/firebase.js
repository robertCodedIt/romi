// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFqDgwKHyrNmzphWHwCHzdCyHW0z5Gaj8",
  authDomain: "romi-auth.firebaseapp.com",
  projectId: "romi-auth",
  storageBucket: "romi-auth.appspot.com",
  messagingSenderId: "361107201430",
  appId: "1:361107201430:web:c6a974db04e92e77d6d1b7",
  measurementId: "G-18MN3DVPC6"
};

// Initialize Firebase
let app;
// const analytics = firebase.getAnalytics(app);
if (firebase.apps.length === 0) {
  app= firebase.initializeApp(firebaseConfig);
  }
const auth = firebase.auth();

export {
    auth,
}