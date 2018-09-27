var addMealNum;

$(document).ready(function () {
    var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // Toggle Recipe Display (Modal)
    $(document).on("click", ".show-modal", function () {
        console.log($(this).data("id"))
        addMealNum = $(this).data("id");
        $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function () {
        $(".modal").removeClass("is-active");
    });

    // Change the entire row to editable
    $('.edit').click(function () {
        var currentTD = $(this).parents('tr').find('td');
        if ($(this).html() == 'Edit') {                  
            $.each(currentTD, function () {
                $(this).prop('contenteditable', true)
            });
        } else {
           $.each(currentTD, function () {
                $(this).prop('contenteditable', false)
            });
        }

        $(this).html($(this).html() == 'Edit' ? 'Save' : 'Edit')

    });
});
