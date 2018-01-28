var initMap = function(){
	var location = {lat: 19.154201, lng: 77.310530};

	var map = new google.maps.Map(
		document.getElementById('google-map'), {
			zoom: 12,
			center: location,
		}
	);

	var marker = new google.maps.Marker({
		position: location,
		map: map,
	});
}