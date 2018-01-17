//////////////////////////////////////////////////////////////////////////////////
//		Setup character model							//
//////////////////////////////////////////////////////////////////////////////////
function defaultValuesMainCharacter(mainCharacter){
	mainCharacter.character.animationFPS = 10
	mainCharacter.character.object3d.position.x = 0
	mainCharacter.character.object3d.position.y = 0
	mainCharacter.character.object3d.position.z = -1
	mainCharacter.character.object3d.castShadow = true

	mainCharacter.character.addEventListener('loaded', function(){
		mainCharacter.setSkinName('ratamahatta')
		mainCharacter.setWeaponName('none')
	})
	return mainCharacter.character.object3d.position.z
}

	//////////////////////////////////////////////////////////////////////////////////
	//		controls.input based on keyboard			//
	//////////////////////////////////////////////////////////////////////////////////

function setMainCharacterControl(mainCharacter){

	document.body.addEventListener('keydown', function(event){
		var inputs	= mainCharacter.controls.inputs
		if( event.keyCode === 'W'.charCodeAt(0) )	inputs.up	= true
		//if( event.keyCode === 'S'.charCodeAt(0) )	inputs.down	= true
		if( event.keyCode === 'A'.charCodeAt(0) )	inputs.left	= true
		if( event.keyCode === 'D'.charCodeAt(0) )	inputs.right	= true
		// to support arrows
		if( event.keyCode === 38 )	inputs.up	= true
		//if( event.keyCode === 40 )	inputs.down	= true
		if( event.keyCode === 37 )	inputs.left	= true
		if( event.keyCode === 39 )	inputs.right	= true
		// aditional imputs
		if( event.keyCode === 32 )	inputs.jump	= true
		if( event.keyCode === 77 )	{
			mainCharacter.setAnimationName('flip')
			if(getHealth()>1) decHealth()
		}
		if( event.keyCode === 78 )  {
			mainCharacter.setAnimationName('crdeath')
			if(getHealth()>1) decHealth()
		}
		// crazy mode
		if( event.keyCode === 16 )	{
			if(mainCharacter.character.animationFPS == 100){
				mainCharacter.character.animationFPS = 10
				}
			else{
				mainCharacter.character.animationFPS = 100
				}
		}
	})

	document.body.addEventListener('keyup', function(event){
		var inputs	= mainCharacter.controls.inputs
		if( event.keyCode === 'W'.charCodeAt(0) )	inputs.up	= false
		if( event.keyCode === 'S'.charCodeAt(0) )	inputs.down	= false
		if( event.keyCode === 'A'.charCodeAt(0) )	inputs.left	= false
		if( event.keyCode === 'D'.charCodeAt(0) )	inputs.right	= false
		// to support arrows
		if( event.keyCode === 38 )	inputs.up	= false
		if( event.keyCode === 40 )	inputs.down	= false
		if( event.keyCode === 37 )	inputs.left	= false
		if( event.keyCode === 39 )	inputs.right	= false

		if( event.keyCode === 32 )	inputs.jump	= false
	})

}
