// Initialize and add the map
function initMap() {
    // The location of South Africa
    const SA = { lat: -30.74067649015158,lng:23.521339979870312 };
    // The map, centered at South Africa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: SA,
    });
   


    // When the user selects a city, get the place details for the city and zoom the map in on that city.

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if ($("#accommodation").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
            var search = {
                bounds: map.getBounds(),
                types: ['lodging']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#camping").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['campground']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#attraction").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['art_gallery', 'aquarium', 'amusement_park', 'museum', 'tourist_attraction', 'zoo']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#park").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['park']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#stadium").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['stadium']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#food").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['cafe', 'restaurant', 'bakery']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#drink").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['bar']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#club").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['night_club']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#shopping").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['shopping_mall', 'store', 'electronics_store', 'clothing_store', 'shoe_store', 'book_store']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
}

function doNearbySearch(search) {

    places.nearbySearch(search, function (results, status) {

        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            document.getElementById('results-heading').innerHTML = "Results";
            $('#hr').show();


            // Create a marker for each place found, and asign a letter to it.

            for (var i = 0; i < results.length; i++) {
                var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
                var markerIcon = MARKER_PATH + markerLetter + '.png';


                // Use marker animation to drop the icons incrementally on the map.

                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon
                });

                // If the user clicks a marker, show the details of that place in an info window.

                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}
  }
  