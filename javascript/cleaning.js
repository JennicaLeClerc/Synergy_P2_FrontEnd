function toggleClass(element,classString,toggleOn){
	cl = ""
	for (const s of element.className.split(" ")){
		if (s != classString) cl+=" "+s;
	}
	if (toggleOn) cl += " "+classString
	element.className = cl;
}





function parseJwt (token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
};


