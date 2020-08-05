class CAMERA extends Frame {
    static NEW = {
        image : [0],
        x : [0],
        y : [0],
    }
    constructor(objectContainer){
        super(ID.camera=-1,CAMERA.NEW,0,0,[new Image(objectContainer.screen.width,objectContainer.screen.height)]);
        objectContainer.new(this);
        this.width = objectContainer.screen.width;
        this.height = objectContainer.screen.height;
        this.offsetX = 0;
        this.offsetY = 0;
    }
    onDraw  = function(e) {
       // console.log("aaa");
    }
}