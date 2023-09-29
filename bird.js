class Bird{
    constructor(sketch,height,pipe) {
        this.sketch = sketch;
        this.pos = height/2;
        this.vel = 0;
        this.pipe = pipe;
        this.img = sketch.loadImage("yellowbird-midflap.png");
    }
    show(){
        this.sketch.push();
        this.sketch.translate(50,this.pos);
        this.sketch.rotate(this.sketch.radians(this.vel*6));
        this.sketch.image(this.img,0,-12);
        this.sketch.pop();
    }
    update(){
        this.vel+=0.3;
        this.pos+=this.vel;
        if((this.pos-12<=(this.pipe.height/2+this.pipe.pos)-50)&&(this.pipe.xpos-24<=50+32)&&this.pipe.xpos+26>=50){
            this.reset();
        }
        if((this.pos+12>=(this.pipe.height/2+this.pipe.pos)+50)&&(this.pipe.xpos-24<=50+32)&&this.pipe.xpos+26>=50){
            this.reset();
        }
    }
    jump(){
        this.vel = -7;
    }
    reset(){
        this.pos = height/2;
        this.vel = 0;
        this.pipe.reset();
    }
}