
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
		incGiantSpeed();
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
	//		Extra score																			//
	//////////////////////////////////////////////////////////////////////////////////
	var extraScore = false;
	function getExtraScore(){
		return extraScore;
	}
	function setExtraScore(extraScore){
		this.extraScore = extraScore;
	}
	function addExtraScore(){
		var generatedExtraScore = Math.floor((Math.random() * 10) + 5);
		document.getElementById('extrascore').style.display = "block";
		document.getElementById('extrascoretext').innerHTML = "+" + generatedExtraScore*100;
		return generatedExtraScore*100;
	}
	function removeExtraScore(){
		document.getElementById('extrascore').style.display = "none";
	}
