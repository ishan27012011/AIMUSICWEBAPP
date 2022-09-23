despacito= "";
dance_monkey="";

function preload(){
despacito=loadSound("despacito.mp3");
dance_monkey=loadSound("dancemonkey.mp3");
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    }

    function draw() {
        image(video, 0, 0, 600, 500);
        }