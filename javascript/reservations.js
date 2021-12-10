var form = document.querySelector("form");

async function createReservation() {
	let startDate = document.getElementById("startDate").value;
	let endDate = document.getElementById("endDate").value;
	let accommodations = document.getElementById("accommodations").value;

	let jwt = localStorage.getItem("token");
	let jsonPayLoad = parseJwt(jwt);
	let userReserveID = parseInt(jsonPayLoad.ID);

	let url = "http://localhost:5000/reservations/save";

	let reservation = {"startDate": startDate, "endDate": endDate, "userReserve": {"userID": userReserveID}, "accommodations": accommodations};

	console.log(reservation.userReserve);

	let response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": jwt
		},
		body: JSON.stringify(reservation)
	})

	response.json().then((data) => {
		console.log(data);
	});
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	createReservation();
	successBox();
})

async function successBox() {
    if(window.confirm('Successfully Booked a Reservation! Click OK to return to the homepage.')){
        window.location.href = 'index.html';
    }
}

function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
};