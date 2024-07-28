importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDf0dWcb1Fw2vZMTAKF7Uzs4sAFWfazNSE",
    authDomain: "biletdemo-86ea1.firebaseapp.com",
    databaseURL: "https://biletdemo-86ea1-default-rtdb.firebaseio.com",
    projectId: "biletdemo-86ea1",
    storageBucket: "biletdemo-86ea1.appspot.com",
    messagingSenderId: "643690863526",
    appId: "1:643690863526:web:13b2ba6cc024cbfde48d67",
    measurementId: "G-E974T3QPB3"
});
const messaging = firebase.messaging();