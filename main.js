despacito= "";
dance_monkey="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;
function preload(){
despacito=loadSound("despacito.mp3");
dance_monkey=loadSound("dancemonkey.mp3");
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    }

    function draw() {
        image(video, 0, 0, 600, 500);
        }
function modelLoaded(){
console.log("Model is working!!")
}

function gotPoses(results){
if (results> 0) {
console.log(results);
leftWrist_x=results[0].pose.leftWrist.x;
leftWrist_y=results[0].pose.leftWrist.y;
console.log("Left Wrist x = "+leftWrist_x+" Left Wrist y = "+leftWrist_y);

rightWrist_x=results[0].pose.rightWrist.x;
rightWrist_y=results[0].pose.rightWrist.y;
console.log("Right Wrist x = "+rightWrist_x+" Right Wrist y = "+rightWrist_y);
}
}
