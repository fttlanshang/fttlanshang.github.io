$(function () {
    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyD6LISm1N2F7MWD24wjZjYxZFHJvOwCY9c",
        authDomain: "blog-fttlanshang.firebaseapp.com",
        databaseURL: "https://blog-fttlanshang.firebaseio.com",
        projectId: "blog-fttlanshang",
        storageBucket: "blog-fttlanshang.appspot.com",
        messagingSenderId: "146148958352",
        appId: "1:146148958352:web:64690e8b9204cc98dcb815",
        measurementId: "G-0YWG4VP0Z8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
});