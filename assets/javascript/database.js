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
  recipeCard = 
  {

      image:response.data.recipe.image,
      label:response.recipe.label,
      cal:calories,
      yield:element.recipe.yield,
      ingredients:response.data.recipe.ingredients.length
     }
   


  $("button").on("click", function (event) {
    event.preventDefault();
    console.log()
    // userName = $("#name-input").val().trim();
    //   userEmail = $("#email-input").val().trim();
    //   userPassword = $("#age-input").val().trim();
      $(this).text("Recipe Saved!");

    database.ref().push({
      // name: name,
      // email: email,
      // age: age,
      image: image,
      label:label,
      cal:cal,
      yield:yield,
      ingredients:ingredients

       
      
    });
  });

      database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
        // Console.loging the last user's data
        // console.log(sv.name);
        // console.log(sv.email);
        // console.log(sv.age);
        console.log(sv.recipeCard);
  
        // Change the HTML to reflect
        // $("#name-display").text(sv.name);
        // $("#email-display").text(sv.email);
        // $("#age-display").text(sv.age);
        
        $(".container-fluid").text();
        $(".container-fluid").text();
        $(".container-fluid").text();
        $(".container-fluid").text();
    
    
    
      }, function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
});