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

THREEx.SkyBackground.baseURL	= '../images/blue-sky-background.jpg'

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.SkyBackground.blueSky	= function(){
	var baseURL	= THREEx.SkyBackground.baseURL
	var geometry = new THREE.SphereGeometry(92,32,32);
	var url = '../images/blue-sky-background.jpg'
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(url),
		side : THREE.BackSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}
