// Responsive table
$(document).ready(function(){
    $('.js-table-data td').each(function(){
      var tdIndex = $(this).index();
      if ($('tr').find('th').eq(tdIndex).attr('data-label')) {
        var thText = $('tr').find('th').eq(tdIndex).data('label');
      } else {
        var thText = $('tr').find('th').eq(tdIndex).text();
      }
      $(this).attr('data-label', thText + ':');
    });
  })

// Functions of make content in weekly meal plan table editable

// Monday
//=========================================================
$(".mon-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#mon-recipe").prop('contenteditable', true);
        $("#mon-comment").prop('contenteditable', true);   
        $("#mon-calories").prop('contenteditable', true);
        $("#mon-serving").prop('contenteditable', true);
        $("#mon-ingredients").prop('contenteditable', true);
        $("#mon-add").removeClass("is-hidden");
        $("#mon-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#mon-recipe").prop('contenteditable', false);
        $("#mon-comment").prop('contenteditable', false);
        $("#mon-calories").prop('contenteditable', false);
        $("#mon-serving").prop('contenteditable', false);
        $("#mon-ingredients").prop('contenteditable', false);
        $("#mon-add").addClass("is-hidden");
        $("#mon-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#mon-recipe").empty();
        $("#mon-comment").empty();
        $("#mon-calories").empty();
        $("#mon-serving").empty();
        $("#mon-ingredients").empty();
    }
    return false;
});

// Tuesday
//=========================================================
$(".tue-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#tue-recipe").prop('contenteditable', true);
        $("#tue-calories").prop('contenteditable', true);
        $("#tue-serving").prop('contenteditable', true);
        $("#tue-ingredients").prop('contenteditable', true);
        $("#tue-add").removeClass("is-hidden");
        $("#tue-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#tue-recipe").prop('contenteditable', false);
        $("#tue-calories").prop('contenteditable', false);
        $("#tue-serving").prop('contenteditable', false);
        $("#tue-ingredients").prop('contenteditable', false);
        $("#tue-add").addClass("is-hidden");
        $("#tue-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#tue-recipe").empty();
        $("#tue-calories").empty();
        $("#tue-serving").empty();
        $("#tue-ingredients").empty();
    }
    return false;
});

// Wednesday
//=========================================================
$(".wed-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#wed-recipe").prop('contenteditable', true);
        $("#wed-calories").prop('contenteditable', true);
        $("#wed-serving").prop('contenteditable', true);
        $("#wed-ingredients").prop('contenteditable', true);
        $("#wed-add").removeClass("is-hidden");
        $("#wed-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#wed-recipe").prop('contenteditable', false);
        $("#wed-calories").prop('contenteditable', false);
        $("#wed-serving").prop('contenteditable', false);
        $("#wed-ingredients").prop('contenteditable', false);
        $("#wed-add").addClass("is-hidden");
        $("#wed-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#wed-recipe").empty();
        $("#wed-calories").empty();
        $("#wed-serving").empty();
        $("#wed-ingredients").empty();
    }
    return false;
});

// Thursday
//=========================================================
$(".thu-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#thu-recipe").prop('contenteditable', true);
        $("#thu-calories").prop('contenteditable', true);
        $("#thu-serving").prop('contenteditable', true);
        $("#thu-ingredients").prop('contenteditable', true);
        $("#thu-add").removeClass("is-hidden");
        $("#thu-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#thu-recipe").prop('contenteditable', false);
        $("#thu-calories").prop('contenteditable', false);
        $("#thu-serving").prop('contenteditable', false);
        $("#thu-ingredients").prop('contenteditable', false);
        $("#thu-add").addClass("is-hidden");
        $("#thu-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#thu-recipe").empty();
        $("#thu-calories").empty();
        $("#thu-serving").empty();
        $("#thu-ingredients").empty();
    }
    return false;
});

// Friday
//=========================================================
$(".fri-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#fri-recipe").prop('contenteditable', true);
        $("#fri-calories").prop('contenteditable', true);
        $("#fri-serving").prop('contenteditable', true);
        $("#fri-ingredients").prop('contenteditable', true);
        $("#fri-add").removeClass("is-hidden");
        $("#fri-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#fri-recipe").prop('contenteditable', false);
        $("#fri-calories").prop('contenteditable', false);
        $("#fri-serving").prop('contenteditable', false);
        $("#fri-ingredients").prop('contenteditable', false);
        $("#fri-add").addClass("is-hidden");
        $("#fri-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#fri-recipe").empty();
        $("#fri-calories").empty();
        $("#fri-serving").empty();
        $("#fri-ingredients").empty();
    }
    return false;
});

// Saturday
//=========================================================
$(".sat-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#sat-recipe").prop('contenteditable', true);
        $("#sat-calories").prop('contenteditable', true);
        $("#sat-serving").prop('contenteditable', true);
        $("#sat-ingredients").prop('contenteditable', true);
        $("#sat-add").removeClass("is-hidden");
        $("#sat-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#sat-recipe").prop('contenteditable', false);
        $("#sat-calories").prop('contenteditable', false);
        $("#sat-serving").prop('contenteditable', false);
        $("#sat-ingredients").prop('contenteditable', false);
        $("#sat-add").addClass("is-hidden");
        $("#sat-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#sat-recipe").empty();
        $("#sat-calories").empty();
        $("#sat-serving").empty();
        $("#sat-ingredients").empty();
    }
    return false;
});

// Sunday
//=========================================================
$(".sun-actions").on("click", function (e) {
    e.preventDefault();
    console.log("data-action:" + $(this).attr("data-action"));

    if ($(this).attr("data-action") == 'change') {
        // If the user clicks 'change' icon
        // Set the 'contenteditable' attribute to 'true'
        $("#sun-recipe").prop('contenteditable', true);
        $("#sun-calories").prop('contenteditable', true);
        $("#sun-serving").prop('contenteditable', true);
        $("#sun-ingredients").prop('contenteditable', true);
        $("#sun-add").removeClass("is-hidden");
        $("#sun-change").addClass("is-hidden");

    } else if ($(this).attr("data-action") == 'add') {
        // If the user clicks 'add' icon
        // Set the 'contenteditable' attribute to 'false'
        $("#sun-recipe").prop('contenteditable', false);
        $("#sun-calories").prop('contenteditable', false);
        $("#sun-serving").prop('contenteditable', false);
        $("#sun-ingredients").prop('contenteditable', false);
        $("#sun-add").addClass("is-hidden");
        $("#sun-change").removeClass("is-hidden");

    } else if ($(this).attr("data-action") == 'remove') {
        // If the user clicks 'remove' icon
        // Empty the HTML contents
        $("#sun-recipe").empty();
        $("#sun-calories").empty();
        $("#sun-serving").empty();
        $("#sun-ingredients").empty();
    }
    return false;
});