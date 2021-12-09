function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
}

var ls = document.getElementById("lgotin");

exp = 0;
console.log(localStorage.getItem('token'));

if(localStorage.getItem('token') != '') {
	var token = localStorage.getItem('token').split(' ')[1];
	exp = parseJwt(token).exp*1000;
}

if(exp - Date.now() <=0 ) {
	console.log("JWT exp");
	ls.textContent = "login";
	ls.href = "../views/userlogin.html";
	console.log(ls.attributes.href);
} else {
	console.log("JWT good for " + (parseJwt(token).exp*1000 - Date.now())/1000);
	ls.textContent = "Logout";
	ls.href = "../views/logout.html";
	console.log(ls.attributes.href);
}