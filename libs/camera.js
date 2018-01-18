
	var cameraDefaultY = 3
	var cameraDefaultZ = 15

	//////////////////////////////////////////////////////////////////////////////////
	//		Camera keydown Controls							//
	//////////////////////////////////////////////////////////////////////////////////
	document.body.addEventListener('keydown', function(event){
		// camera reset
		if( event.keyCode === 88 ){
			getFixedView() ? setFixedView(false) : setFixedView(true)
		}
		// camera zoom out
		if( event.keyCode === 67 ){
			if(cameraDefaultZ>=7){
				cameraDefaultY -= 0.5
				cameraDefaultZ -= 2
			}
		}
		// camera zoom in
		if( event.keyCode === 86 ){
			if(cameraDefaultZ<=15){
				cameraDefaultY += 0.5
				cameraDefaultZ += 2
			}
		}
	})

	//////////////////////////////////////////////////////////////////////////////////
	//		Camera getters Y, Z																				//
	//////////////////////////////////////////////////////////////////////////////////
	function getCameraDefaultY(){
		return cameraDefaultY;
	}

	function getCameraDefaultZ(){
		return cameraDefaultZ;
	}


	//////////////////////////////////////////////////////////////////////////////////
	//		Free or fixed veiw																				//
	//////////////////////////////////////////////////////////////////////////////////
	var fixedView = true;
	function getFixedView(){
		return fixedView;
	}
	function setFixedView(fixedView){
		this.fixedView = fixedView;
	}
