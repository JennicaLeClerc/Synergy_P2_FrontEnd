var ul = document.getElementById("userInfo");
var uID = parseJwt(localStorage.getItem("token").split(" ")[1]).ID;
getUserInfo("http://localhost:5000/users/" + uID, onSuccess);

function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
};

function onSuccess(responseText){
	let e = document.createElement("li");
	e.textContent = "username : " + responseText.username;
	console.log(e);
	console.log(ul);
	ul.appendChild(e);
	
	e = document.createElement("li");
	e.textContent = "firstName : " + responseText.firstName;
	console.log(e);
	console.log(ul);
	ul.appendChild(e);

	e = document.createElement("li");
	e.textContent = "lastName : " + responseText.lastName;
	console.log(e);
	console.log(ul);
	ul.appendChild(e);

	e = document.createElement("li");
	e.textContent = "email : " + responseText.email;
	console.log(e);
	console.log(ul);
	ul.appendChild(e);

	// for(const property in responseText){
	// 	let e = document.createElement("li");
	// 	e.textContent = property + " : " + responseText[property];
	// 	console.log(e);
	// 	console.log(ul);
	// 	ul.appendChild(e);
	// }
}

function getUserInfo(theUrl, callback){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(JSON.parse(xmlHttp.responseText));
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.setRequestHeader("Authorization", localStorage.getItem("token"));
	xmlHttp.send();
}

function updateUser() {
	var password = document.getElementById("password");

	if(password) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				console.log("Successfully updated");
			}
		}   
	}
	xmlHttp.open("PUT", theUrl, true); // true for asynchronous 
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(JSON.stringify(body));
}