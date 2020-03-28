<<<<<<< HEAD
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCY_qBRcje4QmwAQCe_SWaGgoDznoCvsZA",
    authDomain: "supplydrop-e7947.firebaseapp.com",
    databaseURL: "https://supplydrop-e7947.firebaseio.com",
    projectId: "supplydrop-e7947",
    storageBucket: "supplydrop-e7947.appspot.com",
    messagingSenderId: "692804449781",
    appId: "1:692804449781:web:69785e66fbf8e318f01cbc",
    measurementId: "G-2TCXVNEM01"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
=======
import * as firebase from 'firebase/app';
import "firebase/auth";
console.log(process)
const app = firebase.initializeApp({
            apiKey: process.env.REACT_APP_FIREBASE_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
            databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
            appId: process.env.REACT_APP_FIREBASE_APP_ID,
            measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        })

export default app;
>>>>>>> master
