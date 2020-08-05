class MAP extends Frame {
    static NEW = {
        image : [1],
        x : [0],
        y : [0],
    }
    constructor(id,state,x,y,flip){
        super(id,state,x,y,new File().loadImages("object/map/image",1));
    }
}