var UPDATE_DELAY = 100;
var screen = new Screen(1,2);
var objects = new ObjectContainer(screen,["player"]);
var map = new MAP(objects);
var controlPad = new ControlPad(objects);
function main() {
	screen.init();
	objects.new(new PLAYER(ID.player,PLAYER.NEW,10,10,-1));
	var p =new PLAYER(2,PLAYER.NEW,100,10,-1);
	p.onKey = null;
	objects.new(p);
	update();
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