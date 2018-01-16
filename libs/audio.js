
	//////////////////////////////////////////////////////////////////////////////////
	//		Geter functions for music sources																//
	//////////////////////////////////////////////////////////////////////////////////
function getGoodSoundUrl(){
	return 'bower_components/webaudiox/sounds/pick_goods.mp3';
}
function getBadSoundUrl(){
	return 'bower_components/webaudiox/sounds/pick_bads.mp3';
}
function getCatchedSoundUrl(){
	return 'bower_components/webaudiox/sounds/laugh.mp3';
}
function getMusic1Url(){
	return 'bower_components/webaudiox/sounds/CamelsStrawsAndBacks_min.mp3';
}
function getMusic2Url(){
	return 'bower_components/webaudiox/sounds/Ruinion_min.mp3';
}
function getMusic3Url(){
	return 'bower_components/webaudiox/sounds/BubbleChum_min.mp3';
}

	//////////////////////////////////////////////////////////////////////////////////
	//		Setter functions for music buffers																//
	//////////////////////////////////////////////////////////////////////////////////
var goodSoundBuffer;
var badSoundBuffer;
var catchedSoundBuffer;
var music1Buffer;
var music2Buffer;
var music3Buffer;
var soundBuffer;

function setGoodSoundBuffer(buffer){
		this.goodSoundBuffer = buffer;
}
function setBadSoundBuffer(buffer){
		this.badSoundBuffer = buffer;
}
function setCatchedSoundBuffer(buffer){
		this.catchedSoundBuffer = buffer;
}
function setMusic1Buffer(buffer){
		this.music1Buffer = buffer;
}
function setMusic2Buffer(buffer){
		this.music2Buffer = buffer;
}
function setMusic3Buffer(buffer){
		this.music3Buffer = buffer;
}

	//////////////////////////////////////////////////////////////////////////////////
	//		Getter functions for music buffers																//
	//////////////////////////////////////////////////////////////////////////////////
function getGoodSoundBuffer(){
		return goodSoundBuffer;
}
function getBadSoundBuffer(){
		return badSoundBuffer;
}
function getCatchedSoundBuffer(){
		return catchedSoundBuffer;
}
function getMusic1Buffer(){
		return music1Buffer;
}
function getMusic2Buffer(){
		return music2Buffer;
}
function getMusic3Buffer(){
		return music3Buffer;
}
