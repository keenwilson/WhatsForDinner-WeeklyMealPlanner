var addMealNum;

$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    //=======================================================================
    // Toggle Username Input (Modal)
    $(document).on("click", ".show-user-modal", function (e) {
        e.preventDefault();
        $("#ask-username").addClass("is-active");
    });
    $(".user-modal-close").click(function (e) {
        e.preventDefault();
        $("#ask-username").removeClass("is-active");
    });

    //=======================================================================
    // Toggle Recipe Display (Modal)
    $(document).on("click", ".show-recipe-modal", function () {
        console.log($(this).data("id"))
        addMealNum = $(this).data("id");
        $("#show-recipe").addClass("is-active");
    });

    $(".recipe-modal-close").click(function () {
        $("#show-recipe").removeClass("is-active");
    });

    //=======================================================================
    // Toggle Ingredients Display (Modal)
    $(document).on("click", ".show-ingredients-modal", function () {
        console.log($(this).data("id"))
        addMealNum = $(this).data("id");
        $("#show-ingredients").addClass("is-active");
    });

    $(".ingredients-modal-close").click(function () {
        $("#show-ingredients").removeClass("is-active");
    });

    //=======================================================================


    // Function to export weekly plan to ?? file
    $("#export").on("click", function (e) {
        e.preventDefault();
    })

    
});
