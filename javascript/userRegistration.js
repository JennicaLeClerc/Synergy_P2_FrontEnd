function joinList() {
	var form = document.querySelector("form");
	var data =new FormData(form);
	var js = {};
	for(const e of data) {
		js[e[0]] = e[1];
	}
	console.log(js);
	httpGetAsync("http://localhost:5000/users", fail, js);
}

function fail(status) {
	toggleClass(document.getElementById('error'), "hide1", false);
}

function httpGetAsync(theUrl, callbackFAIL, body) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var jn = JSON.parse(xmlHttp.responseText);
			console.log("okay");
			console.log(xmlHttp.responseText);
			auth(body);
			return;
		} else if(xmlHttp.readyState == 4) {
			callbackFAIL(xmlHttp.status);
		}
	}
	xmlHttp.open("POST", theUrl, true); // true for asynchronous 
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(JSON.stringify(body));
}

function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
};

function response(responseText) {
	var jn = JSON.parse(responseText);
	localStorage.setItem('token', "Bearer " + jn['jwt']);
	//window.location.replace("employee.html");
	console.log(parseJwt(jn['jwt']));
	window.location.href = "index.html";
}

function auth(body){
	var tok = {};
	tok["username"] = body.username;
	tok["password"] = body.password;
	tok["role"] = "USER";
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			response(xmlHttp.responseText);
			console.log("authenticated");
			return;
		} else if(xmlHttp.readyState == 4) {
			callbackFAIL(xmlHttp.status);
		}
	}
	xmlHttp.open("POST", "http://localhost:5000/authenticate", true); // true for asynchronous 
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(JSON.stringify(tok));
}

var mybtn = document.getElementById("userForm");
console.log(mybtn);
mybtn.addEventListener('submit', function (e) {
	//prevent the normal submission of the form
	e.preventDefault();
	joinList();
});