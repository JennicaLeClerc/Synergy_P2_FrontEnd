
var nameInput = document.getElementById('username');
console.log(document);
console.log(document.getElementById('test'));
document.getElementById('test').addEventListener('submit', function (e) {

	//prevent the normal submission of the form
	e.preventDefault();
	console.log(nameInput.value);
	httpGetAsync("http://project02-env.eba-sb3s7umi.us-east-2.elasticbeanstalk.com/users",console.log)
});


function httpGetAsync(theUrl, callback)
{
	console.log("here")
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		console.log(xmlHttp.status)
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("POST", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}