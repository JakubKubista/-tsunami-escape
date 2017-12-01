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
THREEx.SkyBackground	= {};

THREEx.SkyBackground.baseURL	= '../'

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.SkyBackground.blueSky	= function(){
	var baseURL	= THREEx.SkyBackground.baseURL
	var geometry = new THREE.SphereGeometry(32,32,32);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(baseURL + 'images/darkclouds-sky.jpeg'),
		side : THREE.BackSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}
