var image_control = new File().loadImages("object/control/image",5);
class ControlPad{
    constructor(objectContainer){
        var imgW = image_control[1].width;
        var imgH = image_control[1].height;
        var sX = imgW *2;
        var sY = imgH *7;
   
        objectContainer.new(new CONTROL(KEY.UP,CONTROL.UP,sX,sY,1));
        objectContainer.new(new CONTROL(KEY.LEFT,CONTROL.LEFT,sX-imgW,sY+imgH,1));
        objectContainer.new(new CONTROL(KEY.RIGHT,CONTROL.RIGHT,sX +imgW,sY+imgH,1));
        objectContainer.new(new CONTROL(KEY.DOWN,CONTROL.DOWN,sX,sY+imgH*2,1));

        var keyImgW = image_control[2].width;
        var keyImgH = image_control[2].height;
        var keyX = keyImgW *3;
        var keyY = keyImgH *5.4;

        objectContainer.new(new CONTROL(KEY.X,CONTROL.X,keyX,keyY,0,1));
        objectContainer.new(new CONTROL(KEY.Y,CONTROL.Y,keyX,keyY+keyImgH+imgW/2,0,1));
        objectContainer.new(new CONTROL(KEY.A,CONTROL.A,keyX+keyImgW+imgW/2,keyY,0,1));
        objectContainer.new(new CONTROL(KEY.B,CONTROL.B,keyX+keyImgW+imgW/2,keyY+keyImgH+imgW/2,0,1));
    }
}
class CONTROL extends Frame {
    static UP = {
        image : [1],
        x : [0],
        y : [0],
        alpha : [0.5],
    }
    static LEFT = {
        image : [1],
        x : [0],
        y : [0],
        rotate :[270],
        alpha : [0.5],
    }
    static RIGHT = {
        image : [1],
        x : [0],
        y : [0],
        rotate :[90],
        alpha : [0.5],
    }
    static DOWN = {
        image : [1],
        x : [0],
        y : [0],
        rotate :[180],
        alpha : [0.5],
    }
    static X = {
        image : [2],
        x : [0],
        y : [0],
        alpha : [0.5],
    }
    static Y = {
        image : [3],
        x : [0],
        y : [0],
        alpha : [0.5],
    }
    static A = {
        image : [4],
        x : [0],
        y : [0],
        alpha : [0.5],
    }
    static B = {
        image : [5],
        x : [0],
        y : [0],
        alpha : [0.5],
    }
    constructor(id,state,x,y,flip){
        super(id,state,x,y,image_control);
        this.collision = new Collision();
        this.collisionImageTmp =new Image(10,10);
        this.isClick = false;
    }
    onKey = function(e) { 
        //console.log("e.onKey: ID.CONTROL " + e.keyCode);
        switch (e.keyCode){
            case KEY.LEFT:
                if(e.state == CONTROL.LEFT)this.lightup = 2;
                break;
            case KEY.RIGHT:
                if(e.state == CONTROL.RIGHT)this.lightup = 2;
                break;
            case KEY.UP:
                if(e.state == CONTROL.UP)this.lightup = 2;
            break;    
            case KEY.DOWN:
                if(e.state == CONTROL.DOWN)this.lightup = 2;
            break;
            case KEY.X:
                if(e.state == CONTROL.X)this.lightup = 2;
            break; 
            case KEY.Y:
                if(e.state == CONTROL.Y)this.lightup = 2;
            break; 
            case KEY.A:
                if(e.state == CONTROL.A)this.lightup = 2;
            break;
            case KEY.B:
                if(e.state == CONTROL.B)this.lightup = 2; 
            break;          
        }
    }
    onMousedown = function(mouseEvent) {
     //  if(this.state  != CONTROL.B)return;
        var mouseFrame = new Frame();
        mouseFrame.x=mouseEvent.offsetX / screen.scale;
        mouseFrame.y=mouseEvent.offsetY / screen.scale;
        mouseFrame.image = this.collisionImageTmp;

        // console.log(this.id , this.x ,this.y , this.image.width , this.image.height);
        // console.log(mouseFrame.x,mouseFrame.y , mouseFrame.image.width , mouseFrame.image.height);
        
        if(this.collision.isCheckRect(this,mouseFrame)){
            //console.log(this.state);
            this.isClick = this.getKeyboardEvent(this.id);
            objects.onKey(this.isClick);
        } 
    }

    onMouseup = function(mouseEvent) {
        this.isClick = null;
    }

    onDraw  = function(e) {
        if(this.isClick){
            objects.onKey(this.isClick);
        }
    }

    getKeyboardEvent(keycode){
        return new KeyboardEvent("keydown", {
            key: "e",
            keyCode: keycode,
            code: "KeyE",
            which: keycode,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,  
        }) 
    }
}