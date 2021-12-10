var form = document.querySelector("form");

async function createReservation() {
	let startDate = document.getElementById("startDate").value;
	let endDate = document.getElementById("endDate").value;
	let jwt = localStorage.getItem("token");
	let url = "http://localhost:5000/reservations/save";

	let reservation = {"startDate": startDate, "endDate": endDate};
	console.log(reservation);

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