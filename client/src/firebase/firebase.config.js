import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCLxiqNHx1857ASZrpGRHfc0JST6THoJMQ",
    authDomain: "vs-proyect.firebaseapp.com",
    projectId: "vs-proyect",
    storageBucket: "vs-proyect.appspot.com",
    messagingSenderId: "475992601568",
    appId: "1:475992601568:web:7f80ee2eba849db1777185",
    measurementId: "G-X4WD8BDTMC"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)