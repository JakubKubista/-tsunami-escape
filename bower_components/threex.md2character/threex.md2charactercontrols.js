var THREEx	= THREEx || {}


THREEx.MD2CharacterControls	= function(object3d, inputs){
	// update function
	var onRenderFcts= [];
	this.update	= function(delta, now){
		onRenderFcts.forEach(function(onRenderFct){
			onRenderFct(delta, now)
		})
	}
	// exports the inputs
	this.inputs	= inputs	|| {
		right	: false,
		left	: false,
		up	: false,
		down	: false,
		turnRight	: false,
		turnLeft	: false,
		jump	: false,
	}
	inputs		= this.inputs

	// parameters
	this.angularSpeed	= Math.PI*2*0.5
	this.linearSpeed	= 5.5		// default 2.5, superspeed 200

	onRenderFcts.push(function(delta, now){
		// turn left/right/
		if( inputs.turnRight )	object3d.rotation.y	-= this.angularSpeed*delta
		if( inputs.turnLeft )	object3d.rotation.y	+= this.angularSpeed*delta

		// jump
		var distanceY	= 0;;
		if( inputs.jump ){
			if(object3d.position.y < .7){
				distanceY = +this.linearSpeed/2 * delta;
			}else{
				inputs.jump = false
			}
		}else{
			if(object3d.position.y != 0){
					distanceY = -this.linearSpeed/2 * delta;
				if(object3d.position.y<0.000001)
					object3d.position.y = 0;
			}
		}
		if( distanceY ){
			var velocity	= new THREE.Vector3(0, distanceY, 0);
			object3d.position.add(velocity);
		}

		// left/right/
		var distanceX	= 0;
		if( inputs.left )	distanceX	= -this.linearSpeed * delta
		if( inputs.right )	distanceX	= +this.linearSpeed * delta
		if( distanceX ){
			var velocity	= new THREE.Vector3(distanceX, 0, 0);
			object3d.position.add(velocity);
		}

		// up/down/
		var distanceZ	= 0;
		if( inputs.up )	distanceZ	= +this.linearSpeed * delta
		if( inputs.down )	distanceZ	= -this.linearSpeed * delta
		if( distanceZ ){
			var velocity	= new THREE.Vector3(0, 0, distanceZ);
			object3d.position.add(velocity);
		}
		if( velocity ){
			var matrix	= new THREE.Matrix4().makeRotationY(object3d.rotation.y);
			velocity.applyMatrix4( matrix );
			object3d.position.add(velocity);
		}
	}.bind(this))
}
