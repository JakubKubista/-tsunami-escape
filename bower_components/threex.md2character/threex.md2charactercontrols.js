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
		if( inputs.turnRight )	object3d.rotation.y	-= this.angularSpeed*delta
		if( inputs.turnLeft )	object3d.rotation.y	+= this.angularSpeed*delta

		// jump
		var distance	= 0;
		if( inputs.jump ){
			if(object3d.position.y < .5){
				distance	= +this.linearSpeed/2 * delta;
				var velocity	= new THREE.Vector3(0, distance, 0);
				object3d.position.add(velocity);
			}else{
				inputs.jump = false
			}
		}else{
			if(object3d.position.y != 0){
				console.log(object3d.position.y);
				object3d.position.y -= this.linearSpeed/2 * delta
				if(object3d.position.y<0.00001)
					object3d.position.y = 0;
			}
		}

		// up/down
		var distance	= 0;
		if( inputs.up )		distance	= +this.linearSpeed * delta;
		if( inputs.left )	{
			object3d.rotation.y = 90
			distance	= -this.linearSpeed * delta
		}
		if( inputs.right )		distance	= +this.linearSpeed * delta;
		if( inputs.down )	distance	= -this.linearSpeed * delta;
		if( distance ){
			var velocity	= new THREE.Vector3(0, 0, distance);
			var matrix	= new THREE.Matrix4().makeRotationY(object3d.rotation.y);
			velocity.applyMatrix4( matrix );
			object3d.position.add(velocity);
		}
	}.bind(this))
}
