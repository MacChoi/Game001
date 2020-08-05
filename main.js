var UPDATE_DELAY = 100;
var screen = new Screen(1.4,2);
var objects = new ObjectContainer(screen,["player"]);
objects.isDrawCollision = true;
function main() {
	screen.init();
	objects.new(new PLAYER(ID.player,10,10,-1));

	p1 = new PLAYER(2,50,10,-1)
	p1.state = p1.NEW2;

	p2 = new PLAYER(2,50,90,-1)
	p2.state = p1.NEW2;
	objects.new(p1);
	//objects.new(p2);
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