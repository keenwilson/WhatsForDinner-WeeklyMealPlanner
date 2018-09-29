$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBm3WJjLjgcJPwZFp7uoE3ii18LDpz9hm4",
    authDomain: "what-s-for-dinner-3fa2d.firebaseapp.com",
    databaseURL: "https://what-s-for-dinner-3fa2d.firebaseio.com",
    projectId: "what-s-for-dinner-3fa2d",
    storageBucket: "",
    messagingSenderId: "348662688668"
  };
  firebase.initializeApp(config);

  // Variable to hold the reference of the database
  var database = firebase.database();


  // Variables
  var userName = "";
  var userEmail = "";
  var userPassword = "";

  $(document).on("click", ".saveBtn", function (event) {
    event.preventDefault();
    // userName = $("#name-input").val().trim();
    //   userEmail = $("#email-input").val().trim();
    //   userPassword = $("#age-input").val().trim();
    // var chosenRecipe = recipeArr$this.val();
    chosenRecipe = recipeArr[$(this).data("id")];
    console.log(chosenRecipe);

    console.log('i work');
    database.ref().push({
      // name: name,
      // email: email,
      // age: age,
      chosenRecipe: chosenRecipe




    });
  });

  database.ref().on("child_added", function (snapshot) {

    var sv = snapshot.data(chosenRecipe);

    console.log(sv.chosenRecipe);





  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
});