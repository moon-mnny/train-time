// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfrqXlNflOSchoGSLSJL2AnaxtGgEKPkg",
  authDomain: "train-time-3a2f5.firebaseapp.com",
  databaseURL: "https://train-time-3a2f5.firebaseio.com",
  projectId: "train-time-3a2f5",
  storageBucket: "train-time-3a2f5.appspot.com",
  messagingSenderId: "88141595545",
  appId: "1:88141595545:web:55a4fc8a7d051514fa8908"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
$("#submit").on("click", function(event) {
  event.preventDefault();
  db.collection("trains").add({
    name: $("#train-name")
      .val()
      .trim(),
    destination: $("#destination")
      .val()
      .trim(),
    firstTRain: $("#first-train")
      .val()
      .trim(),
    frequency: parseInt(
      $("#frequency")
        .val()
        .trim()
    )
  });
});
