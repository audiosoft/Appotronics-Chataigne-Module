//Author: Wazmethod
//Date: 14/10/2024
//Version: 1.0

function init()
{
	local.parameters.receiveFrequency.set(200);
	local.parameters.output.remotePort.setAttribute("readOnly", true);
	local.parameters.output.local.setAttribute("enabled", false);
}


function scriptParameterChanged(param)
{
}



//function update(){}


function moduleParameterChanged(param){
}



function moduleValueChanged(value){	
}

function dataReceived(data){
}


//---

function log(string){
	script.log("\n---LOG SCRIPT APPO---\n");
	script.log(string);
	script.log("\n---EOL SCRIPT APPO---\n");
}

// String avec un \n au lieu de l'espace
function turnOff() {
	log("turnOff() function called");
	local.send("AT+System=Off\n");
	//String: "AT+System=Off " 
}

function turnOn() {
	log("turnOn() function called");
	local.send("AT+System=On\n");
	//String: "AT+System=On "
}

function laserOff(){
	log("laserOff() function called");
	local.send("AT+LightSource=Off\n");
	//String: "AT+LightSource=Off "
}

function laserOn(){
	log("laserOn() function called");
	local.send("AT+LightSource=On\n");
	//String: "AT+LightSource=On "
}

function setSource(source){
	log("setSource(" + source + ") function called");
	if (source == 1) {
		local.send("AT+SignalChannel=HDMI:1\n");
	} else if (source == 2) {
		local.send("AT+SignalChannel=HDMI:2\n");
	} else if (source == 3) {
		local.send("AT+SignalChannel=VGA:1\n");
	} else if (source == 4) {
		local.send("AT+SignalChannel=VGA:2\n");
	} else if (source == 5) {
		local.send("AT+SignalChannel=HDBaseT:1\n");
	}
}

function mute(){
	log("mute function called");
	local.send("AT+VolumeControl=Mute\n");
	//String: "AT+VolumeControl=Mute "
}

function unmute(){
	log("unmute function called");
	local.send("AT+VolumeControl=UnMute\n");
	//String: "AT+VolumeControl=UnMute"
}

function volPlus(){
	log("volPlus function called");
	local.send("AT+VolumeControl=Plus\n");
	//String: "AT+VolumeControl=Plus "
}

function volReduce(){
	log("volReduce function called");
	local.send("AT+VolumeControl=Reduce\n");
	//String: "AT+VolumeControl=Reduce "
}

function setMode(mode){
	log("setMode("+mode+") function called");
	if (mode == 1) {
		local.send("AT+InstallationMode=TableFront\n");
		//String: "AT+InstallationMode=TableFront "
	} else if (mode == 2) {
		local.send("AT+InstallationMode=TableRear\n");
		//String: "AT+InstallationMode=TableRear "
	} else if (mode == 3) {
		local.send("AT+InstallationMode=CeilingFront\n");
		//String: "AT+InstallationMode=CeilingFront "
	} else if (mode == 4) {
		local.send("At+InstallationMode=CeilingRear\n");
		//String: "AT+InstallationMode=CeilingRear "
	}
}

function setAspectRatio(ratio){
	log("setAspectRatio("+ratio+") function called");
	if (ratio == 1) {
		local.send("AT+AspectRatio=Native\n");
	} else if (ratio == 2) {
		local.send("AT+AspectRatio=Fill\n");
	} else if (ratio == 3) {
		local.send("AT+AspectRatio=4_3\n");
	} else if (ratio == 4) {
		local.send("AT+AspectRatio=16_6\n");
	} else if (ratio == 5) {
		local.send("AT+AspectRatio=16_9\n");
	} else if (ratio == 6) {
		local.send("AT+AspectRatio=16_10\n");

	}
}

function volSetting(vol){
	log("volSetting("+ vol+ ") function called");
	local.send("AT+Volume="+vol+"\n");
	//String: "AT+Volume=ÿ "
}

function shiftUp(step){
	log("shiftUp("+step+") function called");
	local.send("AT+MotorShift=Up:"+step+"\n");
	//String: "AT+MotorShift=Down:ÿÿ "
}


function shiftDown(step){
	log("shiftDown("+step+") function called");
	local.send("AT+MotorShift=Down:"+step+"\n");
	//String: "AT+MotorShift=Down:ÿÿ "
}

function shiftLeft(step){
	log("shiftLeft("+step+") function called");
	local.send("AT+MotorShift=Left:"+step+"\n");
	//String: "AT+MotorShift=Down:ÿÿ "
}

function shiftRight(step){
	log("shiftRight("+step+") function called");
	local.send("AT+MotorShift=Right:"+step+"\n");
	//String: "AT+MotorShift=Down:ÿÿ "
}

function focusIncrease(step){
	log("focusIncrease("+step+") function called");
	local.send("AT+MotorFocus=Front:"+step+"\n");
}
function focusReduce(step){
	log("focusReduce("+step+") function called");
	local.send("AT+MotorFocus=Back:"+step+"\n");
	//String: "AT+MotorFocus=Back:ÿ "
}

function zoomIncrease(step){
	log("zoomIncrease("+step+") function called");
	local.send("AT+MotorZoom=Front:"+step+"\n");
}

function zoomReduce(step){
	log("zoomReduce("+step+") function called");
	local.send("AT+MotorZoom=Back:"+step+"\n");
}

function verticalCenter(){
	log("verticalCenter() function called");
	local.send("AT+MotorCenter=ShiftVertical:0\n");
}
function horizontalCenter(){
	log("horizontalCenter() function called");
	local.send("AT+MotorCenter=ShiftHorizontal:0\n");
}
//Querry

function deviceStatus(){
	log("deviceStatus() function called");
	local.send("AT+System?\n");
}

function volStatus(){
	script.log("volStatus() function called");
	local.send("AT+Volume?\n");
}

function laserStatus(){
	script.log("laserStatus() function called");
	local.send("AT+LightSource?\n");
}

function sourceStatus(){
	script.log("sourceStatus() function called");
	local.send("AT+SignalChannel?\n");
}

function deviceInfo(){
	script.log("deviceInfo() function called");
	local.send("AT+deviceInfo?\n");
}

function installationModeStatus(){
	script.log("installationModeStatus() function called");
	local.send("AT+InstallationMode?\n");
}

function ratioStatus(){
	script.log("ratioStatus() function called");
	local.send("AT+AspectRatio?\n");
}

