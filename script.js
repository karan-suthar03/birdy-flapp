let background;
let bird;
let width = 288,height = 512;
let pressed = 0;
let pipe;
function setup(){
    createCanvas(width,height);
    background = loadImage("background-day.png");
    pipe = new Pipe(this,width,height);
    bird = new Bird(this,height,pipe);
}
function draw(){
    image(background,0,0);
    if (keyIsPressed && key === ' ' || mouseIsPressed) {
        if(pressed === 0) {
            bird.jump();
        }
        pressed = 1;
    } else {
        pressed = 0;
    }

    bird.show();
    pipe.show();
    pipe.update();
    bird.update();

}