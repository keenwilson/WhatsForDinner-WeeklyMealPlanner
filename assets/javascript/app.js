$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // Toggle Recipe Display (Modal)
    $(".show-modal").click(function () {
        $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function () {
        $(".modal").removeClass("is-active");
    });

    // clicks handler for search input and search button
    $("#search-recipe").on("click", function () {
        var recipe = $("#find-recipe").val().trim();
        console.log(recipe);
    });



});