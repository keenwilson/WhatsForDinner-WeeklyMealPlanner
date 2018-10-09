var username;
var recipeList = [];
// Click events for Login button to submit a name
// --------------------------------------------------------------
$("#submit-user").click(function (e) {
    e.preventDefault();

    if ($("#enter-username").val() !== "") {
        username = $("#enter-username").val().trim()

        database.ref("/users/").child(username).update({
            name: username
        });

        $("#username").text(username);
        console.log(username);
        $("#ask-username").removeClass("is-active");


        database.ref("/users/").child(username).once('value').then(function (childSnapshot) {
            console.log(childSnapshot.val());
            console.log(childSnapshot.val().chosenRecipe);
            recipeList = childSnapshot.val().chosenRecipe;
            /* if (childSnapshot.val().chosenRecipe.exist) {
                recipeList = childSnapshot.val().chosenRecipe;
            } else {
                recipeList = [];
                database.ref("/users/").child(username).set({
                    'chosenRecipe': recipeList
                  });
            } */
            console.log(recipeList);

            if (recipeList !== []) {
                console.log("create recent saved recipes:", recipeList);
                for (var i = 0; i < recipeList.length; i++) {
    
                    initialSaveMediaRecipes = '<article class="card saved-recipes-card media">' +
                        '<figure class="media-left">' +
                        '<p class="image is-64x64">' +
                        '<img src="' + recipeList[i].image + '">' +
                        '</p>' +
                        '</figure>' +
                        ' <div class="media-content">' +
                        ' <div class="content">' +
                        '<p>' +
                        '<strong>' + recipeList[i].title + '</strong> <small>' + recipeList[i].caloriesPer + ' calories per serving. </small>' + '<small>Servings: ' + recipeList[i].servings + '</small>' +
                        '<br>' +
                        '' +
                        '</p>' +
                        '</div>' +
                        '<nav class="level is-mobile">' +
                        '<div class="level-left">' +
                        '<a class="level-item button is-primary card-footer-item show-recipe-modal plannerBtn" data-id=' + i + '>Add to Planner</a>' +
                        '<a class="level-item button is-primary is-outlined card-footer-item recipe-link" target="_blank" href="' + recipeList[i].url + '"data-id=' + i + '>Get the Recipe</a>' +
                        '</div>' +
                        '</nav>' +
                        '</div>' +
                        '<div class="media-right">' +
                        '<button class="remove-saved-recipes delete" data-id=' + i + '></button>' +
                        '</div>' +
                        '</article>'
    
    
                    $("#saved-recipe").append(initialSaveMediaRecipes);
                }
            }
        });

        

    } else {
        return false;
    }

});

$("#cancel-user").click(function () {

    $("#ask-username").removeClass("is-active");
});

$(".username-modal-close").on("click", function () {
    $("#alert-username").removeClass("is-active")
});