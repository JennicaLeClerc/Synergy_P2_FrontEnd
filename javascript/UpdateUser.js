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