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

THREEx.Environment.city	= function(){
	var baseURL	= THREEx.Environment.baseURL
	var geometry = new THREE.CubeGeometry(128,128,128);
	var material = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(baseURL + 'images/city.jpg'),
		side : THREE.BackSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Environment.road	= function(){
	var baseURL	= THREEx.Environment.baseURL
	var geometry = new THREE.PlaneGeometry(8,40,20);
	var roadURL = generateRoadURL()
	var Texture = THREE.ImageUtils.loadTexture(baseURL + roadURL)
    Texture.wrapS = Texture.wrapT = THREE.RepeatWrapping
	var material = new THREE.MeshBasicMaterial({
		map: Texture,
		side : THREE.DoubleSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Environment.building	= function(){
	var baseURL	= THREEx.Environment.baseURL
	var buildingURL = generateBuildingURL()
	var geometry	= new THREE.CubeGeometry( 15, 15, 15);
	var Texture = THREE.ImageUtils.loadTexture(baseURL+buildingURL)
		Texture.wrapS = Texture.wrapT = THREE.RepeatWrapping
	var material	= new THREE.MeshPhongMaterial({
		map	: Texture,
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}
