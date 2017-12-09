
	//////////////////////////////////////////////////////////////////////////////////
	//		Create obstacle	model				//
	//////////////////////////////////////////////////////////////////////////////////

	var specialObstacle = ""
	function generateObstacleType(){
		var generatedObstacle = null;
		switch (Math.floor((Math.random() * 7) + 1)) {
			case 1:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrate0()
				break
			case 2:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrate1()
				break
			case 3:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrate2()
				break
			case 4:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrateWood()
				break
			case 5:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrateMetal()
				break
			case 6:
				specialObstacle = "heart"
				generatedObstacle = THREEx.Crates.heart()
				break
			case 7:
				specialObstacle = "star"
				generatedObstacle = THREEx.Crates.star()
				break
		}
		return generatedObstacle;
	}

	function setObstacleVerticalDistance(obstacleScale){
		var minDistance = 0
		var obstaclePositionY = 0

		if(obstacleScale<=1.0){
			obstaclePositionY = 0.3
			minDistance = 0.6
		}
		if(obstacleScale>1.0){
			obstaclePositionY = 0.6
			minDistance = 0.8
		}
		if(obstacleScale>1.5){
			obstaclePositionY = 0.9
			minDistance = 1.2
		}
		return [obstaclePositionY,minDistance];
	}

function generateObstacleDistance(){
	var rand = Math.random()
	var distance = 0
	if(Math.random()<0.5)  distance = 3.00 * Math.random()
	if(Math.random()>=0.5)  distance = -3.00 * Math.random()
	return distance
}
