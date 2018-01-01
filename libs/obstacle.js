
	//////////////////////////////////////////////////////////////////////////////////
	//		Generate obstacle	type				//
	//////////////////////////////////////////////////////////////////////////////////
	function generateObstacleType(){
		var generatedObstacle = null;
		var obstacleNumber = Math.floor((Math.random() * 7) + 1);
		//var obstacleNumber = 5
		switch (obstacleNumber) {
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
				generatedObstacle = THREEx.Crates.createCrateLaser()
				break
			case 4:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrateWall()
				break
			case 5:
				specialObstacle = "mistake"
				generatedObstacle = THREEx.Crates.createCrateMetal()
				break
			case 6:
				specialObstacle = "heart"
				generatedObstacle = THREEx.Crates.createCrateHeart()
				break
			case 7:
				specialObstacle = "star"
				generatedObstacle = THREEx.Crates.createCrateFlash()
				break
		}
		return [generatedObstacle, specialObstacle, obstacleNumber];
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

function generateObstacleDistance(obstacleNumber){
  var rand = 0
	var distance = 0
	if(obstacleNumber==5){
		rand = Math.floor((Math.random() * 2) + 1);
		distance = (rand == 1) ? distance = 1.8 : distance = -1.8
	}else if(obstacleNumber==3){
		distance = -2
	}else{
		rand = Math.random()
		if(rand<0.5)  distance = 3.00 * Math.random()
		if(rand>=0.5)  distance = -3.00 * Math.random()
	}
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
	}
	if(specialObstacle == "star"){
		mainCharacter.setSkinName('ctf_r')
		mainCharacter.setWeaponName('none')
		mainCharacter.controls.linearSpeed = 15
	}
  return getActualTime()
}
