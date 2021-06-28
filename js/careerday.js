
function howdy(){
	
	var alrtName = "Howdy " + document.getElementById("gname").value + "!";

	alert(alrtName.trim());

}

function flops(){

	document.getElementById("dvFlops").style.display = "block";
	document.getElementById("btn2").style.display = "none";
	document.getElementById("btn3").style.display = "inline";
}

function hide_those_feet(){

	document.getElementById("dvFlops").style.display = "none";
	document.getElementById("btn2").style.display = "inline";
        document.getElementById("btn3").style.display = "none";


}

function code_contest_check(){

	if(document.getElementById("rb02").checked == true){

		document.getElementById("dvCoders").style.display = "block";
		document.getElementById("spWrong").style.display = "none";
	}
	else{

		document.getElementById("dvCoders").style.display = "none";
		document.getElementById("spWrong").style.display = "inline";
	}


}
