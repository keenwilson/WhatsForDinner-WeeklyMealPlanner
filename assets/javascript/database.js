$(document).ready(function () {

  // Variables
  var chosenRecipe = "";
  var recipeList = [];

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
  database = firebase.database();

  $(document).on("click", ".saveBtn", function (event) {
    event.preventDefault();
    console.log(this)
    console.log($(this).data("id"));

    // Select a global variable recipeArr (from edamam.js file)
    chosenRecipe = recipeArr[$(this).data("id")];
    console.log(chosenRecipe);

    // Add the chosen recipe to a 'saved recipes list
    recipeList.push(chosenRecipe);
    // Add the save recipes to database
    database.ref("/users/Keen/").set({
      'chosenRecipe': recipeList
    });

    database.ref("/users/Keen/").on("child_added", function (snapshot) {
      console.log(snapshot.val());

      // Clear saved recipes area
      $("#saved-recipe").empty();

      // Create a card for each item in saved recipes
      var savedRecipesArr = snapshot.val();
      for (var i = 0; i < savedRecipesArr.length; i++) {

        savedCardRecipes = '<div class="tile is-parent">' +
          '<article class="tile is-child box">' +
          '<div class="card" is-one-third>' +
          '<div class="card-image" is-1by5>' +
          '<figure class="image is-square">' +
          '<img class="recipe-image" src="' + savedRecipesArr[i].image + '" alt="Placeholder image" is-1by5>' +
          '</figure>' +
          '</div>' +
          '<div class="card-content">' +
          '<div class="content">' +
          '<h3 class="title">' + savedRecipesArr[i].title + '</h3>' +
          '<p class="calories">' + savedRecipesArr[i].caloriesPer + ' calories per serving.</p><p> Servings: ' + savedRecipesArr[i].servings + '</p>' +
          '<p class="ingredients">' +
          '<a class="ingredients is-link" data-id=" + $(".deleteBtn").data("id") + ">' + savedRecipesArr[i].numIngredients + ' ingredients</span></p>' +
          '<br>' +
          '<p class="subtitle"><a class="recipe-link" href="' + savedRecipesArr[i].url + '" target="_blank">Get the Recipe</a></p>' +
          '</div>' +
          '</div>' +
          '<footer class="card-footer">' +
          '<a class="button is-primary show-recipe-modal card-footer-item plannerBtn" data-id=" + $("deleteBtn").data("id") + ">Add to Planner</a>' +
          '<a class="button is-warning card-footer-item deleteBtn" data-id=" + $(".deleteBtn").data("id") + ">Remove</a>' +
          '</footer>' +
          '</div>' +

          '</article>' +
          '</div>';

        $("#saved-recipe").append(savedCardRecipes);
      }



    });



  });
});



 /*  database.ref().once("value", function (snapshot) {

    snapshot.forEach(childSnapshot => {
      console.log(childSnapshot.val());
      value = childSnapshot.val();
    });
     

        console.log(value.Victor[0].image);
        label = [value.Victor[0].label];
        calories = [value.Victor[0].calories];
        ingredients = [value.Victor[0].ingredients];
        servings = [value.Victor[0].servings];
        url = [value.Victor[0].url];
    
        

  });
 


 */