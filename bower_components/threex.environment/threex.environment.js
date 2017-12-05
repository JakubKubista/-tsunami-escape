/**
 * declare THREEx namespace
 * @type {[type]}
 */
var THREEx	= THREEx	|| {};

/**
 * THREEx extension
 *
 * @constructor
 */
THREEx.Environment	= {};

THREEx.Environment.baseURL	= '../'

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Environment.blueSky	= function(){
	var baseURL	= THREEx.Environment.baseURL
	var geometry = new THREE.SphereGeometry(32,32,32);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(baseURL + 'images/darkclouds-sky.jpeg'),
		side : THREE.BackSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Environment.road	= function(){
	var baseURL	= THREEx.Environment.baseURL
	var geometry = new THREE.PlaneGeometry(8,1000,20);

	var Texture = THREE.ImageUtils.loadTexture(baseURL + 'images/road-long.jpg')
    Texture.wrapS = Texture.wrapT = THREE.RepeatWrapping;
    Texture.repeat.set( 1, 1 );
	var material = new THREE.MeshBasicMaterial({
		map: Texture,
		side : THREE.DoubleSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}
