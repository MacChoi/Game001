var image_camera = new File().loadImage("object/camera/1.png");
class CAMERA extends Frame {
    static NEW = {
        image : [0],
        x : [0],
        y : [0],
        alpha : [0.5],
    }
    constructor(objectContainer,frame){ 
        super(ID.camera=-3,CAMERA.NEW,0,0,[image_camera]);
        objectContainer.new(this);
        this.target = frame;
        this.objectContainer = objectContainer;
    }
    onDraw= function(mouseEvent) {
        console.log("camera : " + this.x ,this.y);
        console.log("camera target : " +this.target.x ,this.target.y);
        this.x = this.target.x;
        this.y = this.target.y;
        Frame.offsetX = -this.target.x;
        Frame.offsetY = -this.target.y;
    }
}