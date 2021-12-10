function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
};

function toggleClass(element,classString,toggleOn){
	cl = "";
	for (const s of element.className.split(" ")){
		if (s != classString) cl += " " + s;
	}
	if (toggleOn) cl += " " + classString;
	element.className = cl;
}

var ls = document.getElementById("lgotin");

var exp = 0;
var usertype = "";
console.log(localStorage.getItem('token'));
if (localStorage.getItem('token')) {
	var token = localStorage.getItem('token').split(' ')[1];
	exp = parseJwt(token).exp*1000;
	
	usertype = parseJwt(token).Role[0].authority;
	console.log(usertype);
}

var ls = document.getElementById("lgotin");

if(exp - Date.now() <=0 ) {
	console.log("JWT exp");
	ls.textContent = "Login";
	ls.href = "../views/userlogin.html";
	console.log(ls.attributes.href);
	toggleClass(document.getElementById("nav1"), "hideme", false);
	toggleClass(document.getElementById("nav2"), "hideme", true);
	toggleClass(document.getElementById("nav3"), "hideme", true);
	toggleClass(document.getElementById("nav4"), "hideme", true);
	console.log("here");
} else {
	console.log("JWT good for "+ (parseJwt(token).exp*1000 - Date.now())/1000);
	ls.textContent = "Logout";
	ls.href = "../views/logout.html";
	console.log(ls.attributes.href);
	toggleClass(document.getElementById("nav2"), "hideme", true);
	toggleClass(document.getElementById("nav3"), "hideme", true);
	toggleClass(document.getElementById("nav4"), "hideme", true);
	toggleClass(document.getElementById("nav1"), "hideme", true);
	if (usertype == "USER")
		toggleClass(document.getElementById("nav2"), "hideme", false);
	else {
		if(usertype == "MANAGER")
			toggleClass(document.getElementById("nav4"), "hideme", false);
		toggleClass(document.getElementById("nav3"), "hideme", false)
	}
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