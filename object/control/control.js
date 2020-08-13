class ControlPad{
    constructor(objectContainer){
        var images = new File().loadImages("object/control/image",5);
        var imgW = 60;
        var imgH = 60;
        var sX = imgW *2;
        var sY = imgH *12;
   
        objectContainer.new(new CONTROL(KEY.UP,CONTROL.UP,sX,sY,images));
        objectContainer.new(new CONTROL(KEY.LEFT,CONTROL.LEFT,sX-imgW,sY+imgH,images));
        objectContainer.new(new CONTROL(KEY.RIGHT,CONTROL.RIGHT,sX +imgW,sY+imgH,images));
        objectContainer.new(new CONTROL(KEY.DOWN,CONTROL.DOWN,sX,sY+imgH*2,images));

        var keyImgW = 70;
        var keyImgH = 70;
        var keyX = keyImgW *4;
        var keyY = keyImgH *10.3;

        objectContainer.new(new CONTROL(KEY.X,CONTROL.X,keyX,keyY,images));
        objectContainer.new(new CONTROL(KEY.Y,CONTROL.Y,keyX,keyY+keyImgH+imgW/2,images));
        objectContainer.new(new CONTROL(KEY.A,CONTROL.A,keyX+keyImgW+imgW/2,keyY,images));
        objectContainer.new(new CONTROL(KEY.B,CONTROL.B,keyX+keyImgW+imgW/2,keyY+keyImgH+imgW/2,images));
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
    constructor(id,state,x,y,images){
        super(id,state,x,y,images);
        this.isClick = false;
        this.isOffset = false;
    }
    onKeydown = function(e) { 
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
        mouseFrame.w = 10;
        mouseFrame.h = 10;

        // console.log(this.id , this.x ,this.y , this.image.width , this.image.height);
         //console.log(mouseFrame.x,mouseFrame.y , mouseFrame.w , mouseFrame.h);
        
        if(this.collision.isCheckRect(this,mouseFrame)){
            this.isClick = this.getKeyboardEvent(this.id);
            this.lightup = 2; 
        } 
    }

    onMouseup = function(mouseEvent) {
        this.isClick = null;
    }

    onDraw  = function(e) {
        if(this.isClick){
            objects.onKeydown(this.isClick);
            this.lightup = 2; 
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