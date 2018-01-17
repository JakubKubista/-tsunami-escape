
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
			document.getElementById('health').style.marginLeft ="0px"
		}
		return getHealth()
	}

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

	//////////////////////////////////////////////////////////////////////////////////
	//		Set stage																				//
	//////////////////////////////////////////////////////////////////////////////////
	var stage = 1;
	var start = 0;
	var changedStage = false;
	var windowShowed = false;
	function getStage(){
		return stage;
	}
	function getChangedStage(){
		return changedStage;
	}
	function setChangedStage(changedStage){
		this.changedStage = changedStage;
	}
	function getWindowShowed(){
		return windowShowed;
	}
	function setWindowShowed(windowShowed){
		this.windowShowed = windowShowed;
	}
	function getStartStage(){
		return start;
	}
	function setStartStage(start){
		this.start = start;
	}
	function incStage(){
		this.stage++;
	}
	function newWindowStage(show){
		if(show){
			document.getElementById('newstage').style.display = "block";
			document.getElementById('stagetext').innerHTML = "Stage " + getStage();
		}else{
			document.getElementById('newstage').style.display = "none";
		}
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
