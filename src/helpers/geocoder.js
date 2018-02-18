export function getCity(Geocoder)
{
    var data;
    navigator.geolocation.getCurrentPosition( (position) => {
	    data = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	    }
	},
	(error) => {
	    console.log(error);
	    data = {
		lat: null,
		lng: null,
	    }
	},
	{ enableHighAccuracy: true, timeout: 20000},
    );
    Geocoder.geocodePosition(data.lat, data.lng).then( res=> {
	if(res.locality == null)
	{
	    return "Metro Manila"
	}
	else
	{
	    return res.locality 
	}
    })
    .catch(err => console.log(err))

}
