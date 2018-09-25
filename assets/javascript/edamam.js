$(document).ready(function () {
    app_id = "43a7d524";
    api_key = "0f1843d32c0f5990d058cf960ffee888";

    $("#search-recipe").on("click", function (e) {
        $("#display-recipe").empty();

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
                    var calories = Math.floor(element.recipe.calories / element.recipe.yield);
                    console.log(calories)
                    var addRecipe = '<div class="tile is-parent">'+
                    '<article class="tile is-child box">'+
                        // '<!-- 1st Column -->'
                        '<div class="card">'+
                         //   '<!-- Start Recipe Card -->''
                            '<div class="card-image">'+
                                '<figure class="image is-square">'+
                                    '<img src="'+element.recipe.image+'" alt="Placeholder image">'+
                                '</figure>'+
                            '</div>'+
                            '<div class="card-content">'+
                                '<div class="content">'+
                                    '<h3 class="title">'+element.recipe.label+'</h3>'+
                                    '<p class="calories">'+calories+' calories per serving.</p><p> Servings: '+element.recipe.yield+'</p>'+
                                    '<p class="ingredients">'+element.recipe.ingredients.length+' Ingredients</p>'+
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
                });
            }
        });
        $("#find-recipe").val("");
    })
});