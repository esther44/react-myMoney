import firebase from "firebase/app";

// firebase services
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpVHL37SCOj3srDffGjzgquuRTp4oZF30",
  authDomain: "mymoney-5f3f1.firebaseapp.com",
  projectId: "mymoney-5f3f1",
  storageBucket: "mymoney-5f3f1.appspot.com",
  messagingSenderId: "866400208298",
  appId: "1:866400208298:web:05af74e32f0d8fe84bd7d3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
