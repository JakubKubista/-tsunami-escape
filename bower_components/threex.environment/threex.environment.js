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
	var geometry = new THREE.PlaneGeometry(8,40,20);

	var Texture = THREE.ImageUtils.loadTexture(baseURL + 'images/road.jpg')
    Texture.wrapS = Texture.wrapT = THREE.RepeatWrapping
	var material = new THREE.MeshBasicMaterial({
		map: Texture,
		side : THREE.DoubleSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

function generateBuildingURL(){
	var buildingURL = ""
	switch (Math.floor((Math.random() * 5) + 1)) {
    case 1:
        buildingURL = "images/buildings/old-building-texture.jpg"
        break
    case 2:
        buildingURL = "images/buildings/old-building-texture2.jpg"
        break
    case 3:
        buildingURL = "images/buildings/flat-building-texture.jpg"
        break
    case 4:
        buildingURL = "images/buildings/flat-building-texture2.jpg"
        break
    case 5:
        buildingURL = "images/buildings/new-building-texture.jpg"
        break
	}
	return buildingURL
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

THREEx.Environment.waterWave	= function(){
	var baseURL	= THREEx.Environment.baseURL
	var geometry = new THREE.PlaneGeometry(8,20,20);
	var Texture = THREE.ImageUtils.loadTexture(baseURL+"images/water_wave.gif")
		Texture.wrapS = Texture.wrapT = THREE.RepeatWrapping
	var material	= new THREE.MeshPhongMaterial({
		map	: Texture,
		side : THREE.DoubleSide
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}
