
	//////////////////////////////////////////////////////////////////////////////////
	//		Decrease main character health																						//
	//////////////////////////////////////////////////////////////////////////////////
	function healthDec(){
		var health = document.getElementById('health').innerHTML
		var n = health.length;
		if(health.length>3) document.getElementById('health').style.marginLeft ="15px" ;
		var health = health.substring(0, n-1);
		document.getElementById('health').innerHTML = health
		return health.length
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		Increase main character health																						//
	//////////////////////////////////////////////////////////////////////////////////
	function healthInc(){
		//document.getElementById('health').style.left ="10px" ;
		document.getElementById('health').innerHTML += "&#9829;"
		document.getElementById('health').style.marginLeft ="0px" ;
		var health = document.getElementById('health').innerHTML
		return health.length
	}
