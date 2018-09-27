var recipeArr = [];
var saveToPlanner = [];
$(document).ready(function () {

    app_id = "43a7d524";
    api_key = "0f1843d32c0f5990d058cf960ffee888";

    $("#search-recipe").on("click", function (e) {
        $("#display-recipe").empty();
        recipeArr = [];

        console.log($("#find-recipe").val().trim())
        searchTerm = $("#find-recipe").val().trim();


        queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=" + app_id + "&app_key=" + api_key;
        $.ajax({
            type: "GET",
            url: queryURL,
            success: function (response) {
                console.log(response)
                response.hits.forEach(function (element, i) {
                    console.log(element)
                    var recipe = element.recipe;
                    var calories = Math.floor(recipe.calories / recipe.yield);
                    console.log(calories)
                    var addRecipe = '<div class="tile is-parent">' +
                        '<article class="tile is-child box">' +
                        // '<!-- 1st Column -->'
                        '<div class="card">' +
                        //   '<!-- Start Recipe Card -->''
                        '<div class="card-image">' +
                        '<figure class="image is-square">' +
                        '<img src="' + recipe.image + '" alt="Placeholder image">' +
                        '</figure>' +
                        '</div>' +
                        '<div class="card-content">' +
                        '<div class="content">' +
                        '<h3 class="title">' + recipe.label + '</h3>' +
                        '<p class="calories">' + calories + ' calories per serving.</p><p> Servings: ' + recipe.yield + '</p>' +
                        '<p class="ingredients">' + recipe.ingredients.length + ' Ingredients</p>' +
                        '<br>' +
                        '<p class="subtitle"><a href="' + recipe.url + '">Get the Recipe</a></p>' +
                        '</div>' +
                        '</div>' +
                        '<footer class="card-footer">' +
                        '<a class="button is-primary show-modal card-footer-item plannerBtn" data-id"=' + i + '">Add to Planner</a>' +
                        '<a class="button is-primary card-footer-item saveBtn" data-id="' + i + '">Save</a>' +
                        '</footer>' +
                        '</div>' +
                        // {/* '<!-- End Recipe Card -->' */}
                        '</article>' +
                        '</div>';
                    $("#display-recipe").append(addRecipe);
                    var ingredientsArr = [];
                    recipe.ingredients.forEach(element => {
                        // console.log(element.text)
                        ingredientsArr.push(element.text)
                    });
                    var recipeDBinfo = {
                        "image": recipe.image,
                        "title": recipe.label,
                        "caloriesPer": calories,
                        "servings": recipe.yield,
                        "numIngredients": recipe.ingredients.length,
                        "ingredients": ingredientsArr
                    }
                    recipeArrFunc(recipeDBinfo);
                });
            }
        });
        $("#find-recipe").val("");
    })
    var recipeArrFunc = function (recipe) {
        recipeArr.push(recipe);
        console.log(recipeArr)
    }

    $(".modal-card-title").text("Choose day of the week to save meal to:")
    $(".modal-card-body").html('                <select name="dayOfWeek" id="dayOfWeek">' +
        '    <option value="sunday">Sunday</option>' +
        '    <option value="monday">Monday</option>' +
        '    <option value="tuesday">Tuesday</option>' +
        '    <option value="wednesday">Wednesday</option>' +
        '    <option value="thursday">Thursday</option>' +
        '    <option value="friday">Friday</option>' +
        '    <option value="saturday">Saturday</option>' +
        '</select>')
});