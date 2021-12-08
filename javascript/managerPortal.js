function joinList(){
  var nameEl = document.getElementById("firstname");
  var lname = document.getElementById("lastname");
  var username = document.getElementById("userName");
  var password = document.getElementById("password");

  var msg1 = document.getElementById("msg1");
  var isValid = true;
  if(nameEl.value == ""){
    msg1.innerHTML = "This filed is required";

    isValid = false;
  }else if(lname.value == ""){
  msg2.innerHTML = "This filed is required";
  isValid = false;

  }else if(username.value == ""){
  msg3.innerHTML = "This filed is required";
  isValid = false;
  }else if(password.value == ""){
  msg4.innerHTML = "This filed is required";
  isValid = false;
  } else{
    nameEl.nextElementSibling.firstChild.nodeValue = "";
	lname.nextElementSibling.firstChild.nodeValue = "";
	username.nextElementSibling.firstChild.nodeValue = "";
	password.nextElementSibling.firstChild.nodeValue = "";
  }

}
var mybtn = document.getElementById("join_list");
mybtn.addEventListener("click", joinList, false);





