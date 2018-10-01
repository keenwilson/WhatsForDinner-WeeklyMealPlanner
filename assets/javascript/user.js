var username;
$("#submit-user").click(function () {
    
    
    
    if ($("#enter-username").val() !== "") {
        username = $("#enter-username").val().trim()
        $("#username").text(username);
        console.log(username);
        $("#ask-username").removeClass("is-active");
    } else {
        return false;
    }

});

$("#cancel-user").click(function () {

    $("#ask-username").removeClass("is-active");
});