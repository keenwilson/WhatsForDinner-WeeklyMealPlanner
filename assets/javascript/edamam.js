
    var recipeArr = [];
    $(document).ready(function () {

    app_id = "43a7d524";
    api_key = "0f1843d32c0f5990d058cf960ffee888";

    $("#search-recipe").on("click", function (e) {
        $("#display-recipe").empty();
        recipeArr = [];

        console.log($("#find-recipe").val().trim())
        searchTerm = $("#find-recipe").val().trim();


        queryURL = "https://api.edamam.com/search?q="+searchTerm+"&app_id="+app_id+"&app_key="+api_key;
        $.ajax({
            type: "GET",
            url: queryURL,
            success: function (response) {
                console.log(response)
                response.hits.forEach(element => {
                    console.log(element)
                    var recipe = element.recipe;
                    var calories = Math.floor(recipe.calories / recipe.yield);
                    console.log(calories)
                    var addRecipe = '<div class="tile is-parent">'+
                    '<article class="tile is-child box">'+
                        // '<!-- 1st Column -->'
                        '<div class="card">'+
                         //   '<!-- Start Recipe Card -->''
                            '<div class="card-image">'+
                                '<figure class="image is-square">'+
                                    '<img src="'+recipe.image+'" alt="Placeholder image">'+
                                '</figure>'+
                            '</div>'+
                            '<div class="card-content">'+
                                '<div class="content">'+
                                    '<h3 class="title">'+recipe.label+'</h3>'+
                                    '<p class="calories">'+calories+' calories per serving.</p><p> Servings: '+recipe.yield+'</p>'+
                                    '<p class="ingredients">'+recipe.ingredients.length+' Ingredients</p>'+
                                    '<br>'+
                                    '<p class="show-modal subtitle"><a href="#">Get the Recipe</a></p>'+
                                '</div>'+
                            '</div>'+
                            '<footer class="card-footer">'+
                                    '<a href="#" class="card-footer-item">Add to Planner</a>'+
                                    '<a href="#" class="card-footer-item">Save</a>'+
                                    '<a href="#" class="card-footer-item">Delete</a>'+
                            '</footer>'+
                        '</div>' +
                        // {/* '<!-- End Recipe Card -->' */}
                    '</article>'+
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
    var recipeArrFunc = function(recipe) {
        recipeArr.push(recipe);
        console.log(recipeArr)
    }
});