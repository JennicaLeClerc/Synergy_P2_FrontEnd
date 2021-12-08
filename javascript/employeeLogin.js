var form = document.querySelector("form");



function toggleClass(element,classString,toggleOn){
	cl = ""
	for (const s of element.className.split(" ")){
		if (s != classString) cl+=" "+s;
	}
	if (toggleOn) cl += " "+classString
	element.className = cl;
}


function fail(status){
	toggleClass(document.getElementById('error'),"hide1",false)
}
function response(responseText){
	toggleClass(document.getElementById('error'),"hide1",true)
	var jn = JSON.parse(responseText)
	localStorage.setItem('token',"Bearer "+jn['jwt'])
	window.location.replace("employee.html");
}

function httpGetAsync(theUrl, callbackOK,callbackFAIL,body)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			callbackOK(xmlHttp.responseText);
			return;
		}
		else if (xmlHttp.readyState == 4){
			callbackFAIL(xmlHttp.status);
		}
			

	}
	xmlHttp.open("POST", theUrl, true); // true for asynchronous 
	xmlHttp.setRequestHeader("Content-Type","application/json")
	xmlHttp.send(JSON.stringify(body));
}



form.addEventListener('submit', function (e) {
	//prevent the normal submission of the form
	e.preventDefault();
	var data =new FormData(form)
	var js = {}
	for (const e of data){
		js[e[0]] = e[1]
	}
	js['role'] = "EMPLOYEE"
	console.log(js)
	httpGetAsync("http://localhost:5000/authenticate",response,fail,js)


});