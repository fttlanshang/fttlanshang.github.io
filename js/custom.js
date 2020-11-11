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

    var database = firebase.database();
    var oriUrl = window.location.host;
    var curUrl = oriUrl + window.location.pathname;
    function readVisits(url, selector) {
    var db_key = decodeURI(url.replace(new RegExp('\\/|\\.', 'g'), "_"));
        database.ref(db_key).once("value").then(function (result) {
            var count = parseInt(result.val() || 0) + 1;
            database.ref(db_key).set(count);
            if (selector.length > 0) {
                selector.html(count);
            };
        });
    }
    readVisits(oriUrl, $("#visits .count"));
    if (curUrl && curUrl != "_") {
        readVisits("page/" + curUrl, $("#pageviews .count"));
    }
});