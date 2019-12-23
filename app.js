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
//db ref
const db = firebase.firestore();
//html element ref

var trainName = document.querySelector("#train-name-input").value;
var trainDestination = document.querySelector("#destination-input").value;
var trainFirst = document.querySelector("#first-train-input").value;
var trainFrequency = document.querySelector("#frequency-input").value;
var trainArr = [trainName, trainDestination, trainFirst, trainFrequency];

$("#submit").on("click", function(event) {
  event.preventDefault();

  var trainName = document.querySelector("#train-name-input").value;
  var trainDestination = document.querySelector("#destination-input").value;
  var trainFirst = document.querySelector("#first-train-input").value;
  var trainFrequency = parseInt(
    document.querySelector("#frequency-input").value
  );
  var trainArr = [trainName, trainDestination, trainFirst, trainFrequency];

  console.log(trainArr);

  //
  db.collection("trains").add({
    name: trainName,
    destination: trainDestination,
    firstTrain: trainFirst,
    frequency: trainFrequency
  });
});
db.collection("trains").onSnapshot(function(snap) {
  var trainsRows = snap.docs.map(function(doc) {
    console.log(doc.data());
    const { name, destination, firstTrain, frequency } = doc.data();
    return `<tr>
    <td>${name}</td>
    <td>${destination}</td>
    <td>${firstTrain}</td>
    <td>${frequency}</td>
    </tr>`;
  });
  console.log(trainsRows);
  $("#table-body").append(trainsRows);
});
