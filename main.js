var UPDATE_DELAY = 100;
var screen = new Screen(1,2);
var objects = new ObjectContainer(screen,["player"]);

function main() {
	screen.init();
	new MAP(objects);
	new ControlPad(objects);
	
	var player = new PLAYER(ID.player,PLAYER.NEW,0,0,-1);
	player.isOffset = false;
	objects.new(player);
	var player2 =new PLAYER(2,PLAYER.NEW,100,10,-1);
	player2.onKey = null;
	objects.new(player2);
	
	update();
	new CAMERA(objects,player);
}
function update() {
	var start = new Date().getTime();
	objects.draw();

	var delay = new Date().getTime() - start ;
	setTimeout(this.update, UPDATE_DELAY - delay);
}
window.onresize = function(event) {
	screen.init();
}