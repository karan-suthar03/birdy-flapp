class Pipe{
    constructor(sketch,width,height) {
        this.sketch = sketch;
        this.width = width+26;
        this.xpos = this.width;
        this.height = height;
        this.pos = random(-1,1)*height/4;
        this.img = sketch.loadImage("pipe-green.png");
    }
    show(){
        this.sketch.push();
        this.sketch.translate(this.xpos,this.height/2+this.pos);
        this.sketch.image(this.img,-26,50);
        this.sketch.rotate(PI);
        this.sketch.image(this.img,-26,50);
        this.sketch.pop();
    }
    update(){
        this.xpos-=3;
        if(this.xpos <= -26){
            this.xpos = this.width;
            this.pos = random(-1,1)*this.height/4;
        }
    }
    reset(){
        this.xpos = this.width;
        this.height = height;
        this.pos = random(-1,1)*height/4;
    }
}