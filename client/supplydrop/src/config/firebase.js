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