import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCN-kraGPcgxyyJT6c-U_HtgBfqpMB6Ojc",
    authDomain: "library-management-syste-53ebe.firebaseapp.com",
    projectId: "library-management-syste-53ebe",
    storageBucket: "library-management-syste-53ebe.appspot.com",
    messagingSenderId: "227198488777",
    appId: "1:227198488777:web:c777461cfa5749b45f7d18",
    measurementId: "G-LRVPVM0KP8"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;