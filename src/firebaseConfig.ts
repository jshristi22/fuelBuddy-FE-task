// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9PI5CCvY_73ItGFq_fnokxFFn6Ivwy8",
  authDomain: "fuelbuddy-fe-task.firebaseapp.com",
  projectId: "fuelbuddy-fe-task",
  storageBucket: "fuelbuddy-fe-task.appspot.com",
  messagingSenderId: "674067959978",
  appId: "1:674067959978:web:dae4bba3398a67fd0c40d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }