/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
toggle = false;

function openNav() {
	if(toggle) {
		closeNav();
	} else {
		document.getElementById("mySidebar").style.width = "250px";
		toggle = true;
	}
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	toggle = false;
}

