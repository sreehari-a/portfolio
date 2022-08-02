import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe-tqyAEnQsSTX7CDV0AUB1FPeIvOXE2g",
  authDomain: "portfolio-messager.firebaseapp.com",
  databaseURL: "https://portfolio-messager-default-rtdb.firebaseio.com",
  projectId: "portfolio-messager",
  storageBucket: "portfolio-messager.appspot.com",
  messagingSenderId: "884142992048",
  appId: "1:884142992048:web:596e84a65128fadb446975",
};

// Initialize Firebase
class Firebase {
  constructor() {
    this.app = null;
  }
  getFirebase() {
      if(this.app) {
          return this.app;
      }
      this.app = initializeApp(firebaseConfig);
      return this.app;
  }
}
export default Firebase;
