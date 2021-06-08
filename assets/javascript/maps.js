var map, places, infoWindow;
var markers = [];
var autocomplete;
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');
var countries = {
  'za': {                     //For centering the map as opposed to searching.
        center: { lat: -30.4, lng:  24.6 },
        zoom: 6
  }
};

//Resets the map and input fields.

function reset() {
    clearResults();
    clearMarkers();
    $('#category')[0].selectedIndex = 0;
    $("#autocomplete").val("");
    $('#results-heading').html("");
    $('#hr').hide();
    map.setZoom(countries.za.zoom);
    map.setCenter(countries.za.center);
    place = "";

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: (countries.za).zoom,
    center: (countries.za).center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
    styles: [ //Map style used from https://snazzymaps.com/style/74813/africa
            
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Create the autocomplete object and associate it with the UI input control place type "cities".

    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (
            document.getElementById('autocomplete')), {
        type: ['(cities)'],
        componentRestrictions: { country: ['za'] }
    });
    places = new google.maps.places.PlacesService(map);


    // Event listeners.

    autocomplete.addListener('place_changed', onPlaceChanged);
    document.getElementById('category').addEventListener('change', onPlaceChanged);

    $('#hr').hide();
}


// When the user selects a city, get the place details for the city and zoom the map in on that city.

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if ($("#accommodation").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
            var search = {
                bounds: map.getBounds(),
                type: ['lodging']
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
                type: ['campground']
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
                type: ['art_gallery', 'aquarium', 'amusement_park', 'museum', 'tourist_attraction', 'zoo']
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
                type: ['park']
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
                type: ['stadium']
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
                type: ['cafe', 'restaurant', 'bakery']
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
                type: ['bar']
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
                type: ['night_club']
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
                type: ['shopping_mall', 'store', 'electronics_store', 'clothing_store', 'shoe_store', 'book_store']
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


function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}


function dropMarker(i) {
    return function () {
        markers[i].setMap(map);
    };
}


// Adds the results table into the results section div.

function addResult(result, i) {
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';


    // Make background transparent in results table

    var tr = document.createElement('tr');
    tr.style.background = ('transparent');
    tr.onclick = function () {
        google.maps.event.trigger(markers[i], 'click');

    };

}

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}



// Get the place details for each search result. Show the information in an info window, anchored on the marker for the place that the user selected.

function showInfoWindow() {
    var marker = this;
    places.getDetails({ placeId: marker.placeResult.place_id },
        function (place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);

        });
}
