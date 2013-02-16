function initialize() {
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng( 38.5, -92.5),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = window.map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

	

}

function setPath(lat1, long1, lat2, long2) {
	var pathCoordinates = [
		new google.maps.LatLng(lat1, long1),
		new google.maps.LatLng(lat2, long2),
	];
	var path= new google.maps.Polyline({
		path: pathCoordinates,
		strokeColor: "#FFF000",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	path.setMap(window.map);
}


