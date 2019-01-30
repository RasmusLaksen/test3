function calculate(){
	var t = widthbox.value;
	
	var w = document.getElementById("widthbox").value;
	var l = document.getElementById("lenghtbox").value;
	var h = document.getElementById("heightbox").value;
	//konvertering til float
	w=parseFloat(w);
	l=parseFloat(h);
	h=parseFloat(l);
	var result = w*l*h;
	//hvis resultat
	document.getElementById("result") .innerHTML = result;
	
}

function multiplication(){
	document.getElementById("multi-tb") .innerHTML="";
	var f = document.getElementById("factor").value;
	for(var i=1;i<=20;i++) {
		var res=f*i;
		document.getElementById("multi-tb") .innerHTML += res+"</br>";
	}
}

