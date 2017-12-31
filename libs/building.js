
	//////////////////////////////////////////////////////////////////////////////////
	//		Generate building height				//
	//////////////////////////////////////////////////////////////////////////////////
	function generateBuildingHeight(){
		var generatedHeight = Math.floor((Math.random() * 7) + 1);
		if(generatedHeight == 5) generatedHeight = 6;
		if(generatedHeight == 4) generatedHeight = 3;
		return generatedHeight;
	}
