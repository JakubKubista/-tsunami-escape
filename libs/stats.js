
	//////////////////////////////////////////////////////////////////////////////////
	//		Decrease main character health																						//
	//////////////////////////////////////////////////////////////////////////////////
	function healthDec(){
		var health = document.getElementById('health').innerHTML
		var n = health.length;
		var health = health.substring(0, n-1);
		document.getElementById('health').innerHTML = health
	}
