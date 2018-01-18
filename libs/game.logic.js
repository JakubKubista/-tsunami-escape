
	//////////////////////////////////////////////////////////////////////////////////
	//		Game main system																					//
	//////////////////////////////////////////////////////////////////////////////////
	function gameLoaded(){
		document.getElementById('loading').style.display = "none"
		document.getElementById('enterence').style.display = "block"
		setPaused(true)
		setLoaded(true)
		setFixedView(false)
	}

	function gameOver(score){
		document.getElementById('leftInfo').style.display = "none"
		document.getElementById('rightInfo').style.display = "none"
		document.getElementById('statistics').style.display = "block"
		document.getElementById('finalScore').innerHTML = "Score: " + score
	}

	function gameStarted(){
		document.getElementById('enterence').style.display = "none"
		document.getElementById('leftInfo').style.display = "block"
		document.getElementById('rightInfo').style.display = "block"
		document.getElementById('hint').style.display = "block"
		setPaused(false)
		setLoaded(false)
		setFixedView(true)
	}

	function gameRestart(){
		location.reload();
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		Pause system																					//
	//////////////////////////////////////////////////////////////////////////////////
	var paused = true;
	function getPaused(){
		return paused;
	}
	function setPaused(paused){
		this.paused = paused;
	}
	function gamePause(){
		document.getElementById('pause').style.display = "block"
		setPaused(true)
		setFixedView(false)
	}
	function gameContinue(){
		document.getElementById('pause').style.display = "none"
		setPaused(false);
		setFixedView(true)
	}

	// Pause keydown Controls
	document.body.addEventListener('keydown', function(event){
	if( event.keyCode === 80 ){
		if(getPaused()){
			gameContinue()
		}else{
			gamePause()
		}
	}
	})

	//////////////////////////////////////////////////////////////////////////////////
	//		Load system																					//
	//////////////////////////////////////////////////////////////////////////////////
	var loaded = true;
	function getLoaded(){
		return loaded;
	}
	function setLoaded(loaded){
		this.loaded = loaded;
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		Controls window																					//
	//////////////////////////////////////////////////////////////////////////////////
	function gameControls(show){
		if(show == 1){
			document.getElementById('enterence').style.display = "none"
			document.getElementById('controls').style.display = "block"
			document.getElementById('enterenceBack').style.display = "block"
			document.getElementById('pauseBack').style.display = "none"
		}
		if(show == 2){
			document.getElementById('pause').style.display = "none"
			document.getElementById('controls').style.display = "block"
			document.getElementById('enterenceBack').style.display = "none"
			document.getElementById('pauseBack').style.display = "block"
		}
		if(show == 3){
			document.getElementById('enterence').style.display = "block"
			document.getElementById('controls').style.display = "none"
		}
		if(show == 4){
			document.getElementById('pause').style.display = "block"
			document.getElementById('controls').style.display = "none"
		}
	}
