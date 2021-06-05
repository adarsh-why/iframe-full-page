$(function(){

	// on click on submit
	$('#submit').on('click', function(){

		// set website url
		var $website_url = $('[name="website_url"]');

		// set location
		var $location = $('[name="location"]:checked');

		// if website url or location is not set then do nothing
		if ($website_url.val().trim() == '') { // || $location.val() == undefined) {
			return false;
		}

		console.log("loc", location)

		var url_parts = $website_url.val().split('/');

		var url_protocol = url_parts[0];

		if (location.protocol == 'https:' && url_protocol != 'https:') {
			alert('ERROR: You\'re on a secure (HTTPS) website, but you\'ve entered a non-secure site.');
			return false;
		}

		// log location
		console.log({ location: $location.val() });

		// hide form and parent
		$('#root').hide();

		// set src and show
		$('#iframe').attr('src', $website_url.val()).show();

	});

});
