function createNewEmployee() {
     var firstname = document.getElementById("firstname");
     var lastname = document.getElementById("lastname");
     var username = document.getElementById("userName");
	var password = document.getElementById("password");
	theUrl = theUrl = "http://localhost:5000/create";
var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				console.log("successfully added employee");
			}
		}

	xmlHttp.open("POST", theUrl, true); // true for asynchronous
	xmlHttp.setRequestHeader("Content-Type","application/json");
	xmlHttp.send(JSON.stringify(body));
}