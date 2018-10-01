$(document).ready(function () {
    $("#search-restaurant").click(function () {
        $("#restaurantArea").empty();
        var location = "Kansas City, " + $("#find-restaurant").val().trim();

        var zomato_api_key = "f97a42723062b9a1fedcd6ecac3d1dbb";
        var zomatoUrl = "https://developers.zomato.com/api/v2.1/locations?query=" + location;
        console.log(location);

        $.ajax({
            url: zomatoUrl,
            dataType: 'json',
            async: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('user-key', zomato_api_key);
            },  // This inserts the api key into the HTTP header
            success: function (response) {
                console.log(response);
                
                var entity_id = response.location_suggestions[0].entity_id;
                var entity_type = response.location_suggestions[0].entity_type;
                zomatoUrl = "https://developers.zomato.com/api/v2.1/location_details?entity_id=" + entity_id + "&entity_type=" + entity_type;
                // console.log(response.location_suggestions[0].entity_id + "\n\n"+response.location_suggestions[0].entity_type)
                $.ajax({
                    url: zomatoUrl,
                    dataType: 'json',
                    async: true,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('user-key', zomato_api_key);
                    },  // This inserts the api key into the HTTP header
                    success: function (response) {
                        console.log(response)
                        var thisSearch = response.best_rated_restaurant;
                        var table = $("<table class='table'>");
                        var tr = $("<tr>");
                        var th = $("<th>");
                        var head = "<h2>Top Restaurants in " + response.location.title + "</h1> Click a restaurant name to go to google maps.";
                        $("#restaurantArea").append(head);
                        $("#restaurantArea").append(table)
                        $(table).append(tr);
                        $(tr).append("<th>Name</th><th>Address</th><th>Rating</th><th>Cuisine</th>");
                        thisSearch.forEach(element => {
                            console.log(element)
                            var googleMapsElements = element.restaurant.name+element.restaurant.location.address;
                            googleMapsElements = encodeURIComponent(googleMapsElements.trim());
                            var googleMaps = "https://www.google.com/maps/search/?api=1&query="+googleMapsElements;
                            var tr = $("<tr>");
                            $(table).append(tr);
                            $(tr).append("<th><a href="+googleMaps+" class='recipe-link is-link' target='_blank'>"+element.restaurant.name+"</a></th>"+
                            "<th>"+element.restaurant.location.address+"</th>"+
                            "<th>"+element.restaurant.user_rating.aggregate_rating+"/5</th>"+
                            "<th>"+element.restaurant.cuisines+"</th>");
                        });
                    }
                });
            }
        });

        $("#find-restaurant").val("");

    })
})