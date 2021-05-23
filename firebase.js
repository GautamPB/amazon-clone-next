import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWgL_fTyoMkmL396zkDmRTEmh5rZftvFc",
  authDomain: "fir-86433.firebaseapp.com",
  databaseURL: "https://fir-86433.firebaseio.com",
  projectId: "fir-86433",
  storageBucket: "fir-86433.appspot.com",
  messagingSenderId: "1010871504814",
  appId: "1:1010871504814:web:acf70787f3f66ef518823f",
  measurementId: "G-F5ZX6WGYEE",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const provider = new firebase.auth.GoogleAuthProvider();
const auth = app.auth();

export { provider, auth };
