
	//////////////////////////////////////////////////////////////////////////////////
	//		Generate obstacle	type				//
	//////////////////////////////////////////////////////////////////////////////////
	function generateObstacleType(specialObstacle){
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
		return [generatedObstacle, specialObstacle];
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		Set vertical distance Y and minimal distance for collision by scale 			//
	//////////////////////////////////////////////////////////////////////////////////

	function setObstacleVerticalDistance(obstacleScale){
		var minDistance = 0
		var obstaclePositionY = 0

		if(obstacleScale<=1.0){
			obstaclePositionY = 0.9
			minDistance = 0.6
		}
		if(obstacleScale>1.0){
			obstaclePositionY = 1.2
			minDistance = 0.8
		}
		if(obstacleScale>1.5){
			obstaclePositionY = 1.4
			minDistance = 1.2
		}
		return [obstaclePositionY,minDistance];
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		Set random horizontal distance X 			 			 			 			 			 			 			//
	//////////////////////////////////////////////////////////////////////////////////

function generateObstacleDistance(){
	var rand = Math.random()
	var distance = 0
	if(Math.random()<0.5)  distance = 3.00 * Math.random()
	if(Math.random()>=0.5)  distance = -3.00 * Math.random()
	return distance
}

//////////////////////////////////////////////////////////////////////////////////
//		Use obstacle																								   						//
//////////////////////////////////////////////////////////////////////////////////
function getActualTime(){
	var d = new Date();
  return d.getTime();
}

function useObstacle(mainCharacter,specialObstacle){
mainCharacter.character.object3d.position.y = 0
mainCharacter.character.animationFPS = 10
	if(specialObstacle == "default"){
		mainCharacter.setSkinName('ratamahatta')
		mainCharacter.setWeaponName('none')
		mainCharacter.controls.linearSpeed = 5.5
	}
	if(specialObstacle == "mistake"){
		mainCharacter.setSkinName('ratamahatta')
		mainCharacter.setWeaponName('none')
		mainCharacter.controls.linearSpeed = 1.5
	}
	if(specialObstacle == "heart"){
		mainCharacter.setSkinName('ctf_b')
		mainCharacter.setWeaponName('w_hyperblaster')
		healthInc()
	}
	if(specialObstacle == "star"){
		mainCharacter.setSkinName('ctf_r')
		mainCharacter.setWeaponName('none')
		mainCharacter.controls.linearSpeed = 15
	}
  return getActualTime()
}
