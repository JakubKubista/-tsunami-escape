
	//////////////////////////////////////////////////////////////////////////////////
	//		Get main character health																						//
	//////////////////////////////////////////////////////////////////////////////////

function getHealth(){
		var health = document.getElementById('health').innerHTML
		return health.length
}

	//////////////////////////////////////////////////////////////////////////////////
	//		Decrease main character health																						//
	//////////////////////////////////////////////////////////////////////////////////
	function decHealth(){
		var n = getHealth()
		var health = document.getElementById('health').innerHTML
		if(n>3) document.getElementById('health').style.marginLeft ="15px"
		var health = health.substring(0, n-1);
		document.getElementById('health').innerHTML = health
		return getHealth()
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		Increase main character health																						//
	//////////////////////////////////////////////////////////////////////////////////
	function incHealth(){
		var n = getHealth()
		if(n<=3){
			document.getElementById('health').innerHTML += "&#9829;"
			document.getElementById('health').style.marginLeft ="0px" ;
		}
		return getHealth()
	}
