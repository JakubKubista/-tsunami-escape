
//////////////////////////////////////////////////////////////////////////////////
//		Setup giant character							//
//////////////////////////////////////////////////////////////////////////////////
function defaultValuesGiantCharacter(giantCharacter){
	giantCharacter.character.animationFPS = 5
	giantCharacter.character.scale = 1/5
	giantCharacter.character.object3d.position.x = 0
	giantCharacter.character.object3d.position.y = 4.5
	giantCharacter.character.object3d.position.z = -40

	giantCharacter.character.addEventListener('loaded', function(){
		giantCharacter.setSkinName('dead')
		giantCharacter.setWeaponName('none')
		giantCharacter.setAnimationName('flip')
		gameLoaded()
	})
}
//////////////////////////////////////////////////////////////////////////////////
//		Giant character speed							//
//////////////////////////////////////////////////////////////////////////////////
var giantSpeed = 8.5
function getGiantSpeed(){
	return giantSpeed;
}
function incGiantSpeed(){
	this.giantSpeed += 2;
}
