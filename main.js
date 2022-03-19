function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
}
function draw(){
createCanvas(350,350)
fill(250,0,0);
stroke(250,0,0);
circle(30, 30, 20);

circle(30, 200, 20);

circle(200, 30, 20);

circle(200, 200, 20);

fill(0,250,0);
stroke(0,250,0);
rect(25,30,10,170);

rect(195,30,10,170);

rect(25,30,170,10);

rect(25,195,170,10);
}
function snapshot(){
    save('savefile.png');
}
function apply_tint(){
    tintcolor=document.getElementById("tintname").value;
}
