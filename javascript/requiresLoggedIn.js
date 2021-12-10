function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
};

var exp = 0;
console.log("here");
console.log(localStorage.getItem('token'));

if(localStorage.getItem('token')) {
	var token = localStorage.getItem('token').split(' ')[1];
	exp = parseJwt(token).exp*1000;
}
if(exp - Date.now() <=0 ) {
	console.log("here1");
	window.location.replace("userlogin.html");
}
