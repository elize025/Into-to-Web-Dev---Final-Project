function validateUserName (){
  var uName = document.getElementById("uName").value;
  var val1 = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (val1.test(uName)){
    document.getElementById("uNamePrompt").style.color ="white";
    document.getElementById("uNamePrompt").style.background = "green";
    document.getElementById("uNamePrompt").innerHTML = "<strong>Valid</strong>";
    return true;
  }
  else {
    document.getElementById("uNamePrompt").style.color = "white";
    document.getElementById("uNamePrompt").style.background = "red";
    document.getElementById("uNamePrompt").innerHTML = "<strong>Too Short</strong>";
    return false;
  }
}

function validateEmail () {
	var email = document.getElementById ("emailAdd").value;
	var val2 =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if (val2.test(email)){
		document.getElementById("eMailPrompt").style.color = "white";
		document.getElementById("eMailPrompt").style.background = "green";
		document.getElementById("eMailPrompt").innerHTML = "<strong> Valid</strong>";
		return true;
	}
	else{
		document.getElementById("eMailPrompt").style.color = "white";
		document.getElementById("eMailPrompt").style.background = "red";
		document.getElementById("eMailPrompt").innerHTML = "<strong>Invalid</strong>";
		return false;
	}
}

function userData () {
	var name = document.getElementById("uName").value;
	var email = document.getElementById("emailAdd").value;
	var vname = name + "</br> " +"Your email is " + email;
	
	document.getElementById("dataConfirm").innerHTML = "<h2>Nice to meet you...</h2>";
	document.getElementById("dataConfirm").innerHTML += "<p>" + vname + "</p>";
}

function fanIntensity () {
	var fan = document.forms[0];
	var txt = "";
	var i;
	for (i = 0; i < fan.length; i++) {
		if (fan[i].checked) {
			txt = txt + fan[i].value + " ";
		}
	}
	document.getElementById("degree").value = "You are  " + txt;
}

function myGenre () {
	var mgenre = document.forms[1];
	var seb = "";
	var q;
	for (q = 0; q < mgenre.length; q++) {
		if (mgenre[q].checked){
			seb = seb + mgenre[q].value + " ";
		}
	}
	document.getElementById("mygenre").value = " You love watching " + seb + " movies";
}


