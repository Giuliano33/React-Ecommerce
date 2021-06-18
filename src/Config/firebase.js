import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyAQRiF174kBb6S83j5ruQ7zMhbbM_2-PYE",
    authDomain: "react-ecommerce-d2d8f.firebaseapp.com",
    projectId: "react-ecommerce-d2d8f",
    storageBucket: "react-ecommerce-d2d8f.appspot.com",
    messagingSenderId: "904833469028",
    appId: "1:904833469028:web:18304cfbb47750b9d8ad71",
    measurementId: "G-1L3HKX1ET6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  firebase.db = firebase.firestore();
  

  console.log("Firebase", firebase.database())

  export default firebase; 