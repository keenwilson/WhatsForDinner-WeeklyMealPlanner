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

            if (childSnapshot.key == 'chosenRecipe') {
                recipeList = childSnapshot.val().chosenRecipe;
            } else {
                recipeList = [];
                database.ref("/users/").child(username).set({
                    'chosenRecipe': recipeList
                  });
            }
            console.log(recipeList);
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