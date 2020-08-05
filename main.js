var UPDATE_DELAY = 100;
var screen = new Screen(1,2);
var objects = new ObjectContainer(screen,["player","map"]);
objects.isDrawCollision = true;
function main() {
	screen.init();
	objects.new(new MAP(ID.map,MAP.NEW,0,0,1));
	objects.new(new PLAYER(ID.player,PLAYER.NEW,10,10,-1));
	new ControlPad(objects);
	update();
}
function update() {
	var start = new Date().getTime();
	objects.draw();
	screen.push();
	var delay = new Date().getTime() - start ;
	setTimeout(this.update, UPDATE_DELAY - delay);
}
window.onresize = function(event) {
	screen.init();
}