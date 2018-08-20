var initMap = function(){
	var location = {lat: 19.154201, lng: 77.310530};

	var map = new google.maps.Map(
		document.getElementById('google-map'), {
			zoom: 18,
			center: location,
		}
	);

	var marker = new google.maps.Marker({
		position: location,
		map: map,
	});
}


	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
	});