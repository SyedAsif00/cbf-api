import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnxDXF2FTn-HfZmk6N47tNINmcS4BIWkU",
  authDomain: "api-tester-c9b13.firebaseapp.com",
  projectId: "api-tester-c9b13",
  storageBucket: "api-tester-c9b13.appspot.com",
  messagingSenderId: "147343628839",
  appId: "1:147343628839:web:6dcbc475bec5d9094f4c02",
  measurementId: "G-W3YR0ZRVYP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
