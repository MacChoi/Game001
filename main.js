var UPDATE_DELAY = 100;
var screen = new Screen(1,2);
var objects = new ObjectContainer(screen,["player","map"]);
var pad = new ObjectContainer(screen,["control"]);
function main() {
	screen.init();
	new MAP(objects);
	new ControlPad(pad);
	var player = new PLAYER(ID.player,PLAYER.NEW,0,0,-1);
	objects.new(player);

	var player2 =new PLAYER(2,PLAYER.NEW,100,10,-1);
	player2.onKeydown = null;
	player2.onDraw = null;
	objects.new(player2);

	var player3 =new PLAYER(3,PLAYER.NEW,100,80,-1);
	player3.onKeydown = null;
	player3.onDraw = null;
	objects.new(player3);
	
	update();
}

function update() {
	var start = new Date().getTime();
	objects.draw();
	pad.draw();
	screen.push();
	var delay = new Date().getTime() - start ;
	setTimeout(this.update, UPDATE_DELAY - delay);
}
window.onresize = function(event) {
	screen.init();
}
//window.addEventListener("mousemove", onMousemove, false);
window.addEventListener("mousedown", onMousedown, false);
window.addEventListener("mouseup", onMouseup, false);      
window.addEventListener('keydown', onKeydown);
function onMouseup(e) {
	pad.onMouseup(e);
}
function onMousedown(e) {
	pad.onMousedown(e);
}
function onKeydown(e) {
	objects.onKeydown(e);
	pad.onKeydown(e);
}

File.appendLoading();
File.onLoading = function (count){
	if(count==10)File.removeLoading();
	console.log("onLoading :" +count);
};