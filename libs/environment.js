
	//////////////////////////////////////////////////////////////////////////////////
	//		Generate building height				//
	//////////////////////////////////////////////////////////////////////////////////
	function generateBuildingHeight(){
		var generatedHeight = Math.floor((Math.random() * 7) + 1);
		if(generatedHeight == 5) generatedHeight = 6;
		if(generatedHeight == 4) generatedHeight = 3;
		return generatedHeight;
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		URLs of buildings																			//
	//////////////////////////////////////////////////////////////////////////////////

	function generateBuildingURL(){
		var buildingURL = ""
		switch (Math.floor((Math.random() * 7) + 1)) {
			case 1:
					buildingURL = "images/buildings/old-building-texture.jpg"
					break
			case 2:
					buildingURL = "images/buildings/old-building-texture2.jpg"
					break
			case 3:
					buildingURL = "images/buildings/flat-building-texture.jpg"
					break
			case 4:
					buildingURL = "images/buildings/flat-building-texture2.jpg"
					break
			case 5:
					buildingURL = "images/buildings/new-building-texture.jpg"
					break
			case 6:
					buildingURL = "images/buildings/modern-building-texture.jpg"
					break
			case 7:
					buildingURL = "images/buildings/brick-building-texture.jpg"
					break
		}
		return buildingURL
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		URLs of stages																		//
	//////////////////////////////////////////////////////////////////////////////////

	function generateRoadURL(){
		var stageNumber = getStage()
		if(getStage()>5) stageNumber-=5
		var roadURL = "";
		if(getChangedStage()){
			roadURL = "images/roads/road"+stageNumber+"New.jpg"
		}else{
			roadURL = "images/roads/road"+stageNumber+".jpg"
		}
		return roadURL
	}
