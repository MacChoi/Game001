var image_map = new File().loadImage("object/map/image/1.png");
class MAP extends Frame {
    static NEW = {
        image : [0],
        x : [0],
        y : [0],
    }
    constructor(objectContainer){ 
        super(ID.map=-2,MAP.NEW,0,0,[image_map]);
        objectContainer.new(this);
    }
}
