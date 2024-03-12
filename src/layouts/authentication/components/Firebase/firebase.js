// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC314pCfq3q5irPaBjHmfaZ2XY87GGfLU",
  authDomain: "weather-station-75efa.firebaseapp.com",
  projectId: "weather-station-75efa",
  storageBucket: "weather-station-75efa.appspot.com",
  messagingSenderId: "414713128547",
  appId: "1:414713128547:web:ab49e10527a7123b21fa56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
