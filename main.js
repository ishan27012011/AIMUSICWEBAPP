despacito="";
dance="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
despacitoStatus = "";
danceStatus = "";

function setup(){
    canvas = createCanvas(650,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    despacito = loadSound("despacito.mp3");
    dance = loadSound("dancemonkey.mp3");
}

function draw(){
    image(video,0,0,650,500);

    fill("cyan");
    stroke("black");

    despacitoStatus = despacito.isPlaying();
    console.log(despacitoStatus);

    danceStatus = dance.isPlaying();
    console.log(danceStatus);

    if(scoreleftWrist > 0.1){
        circle(leftWrist_x,leftWrist_y,20);
        dance.stop();
        if(despacitoStatus == false){
            despacito.play();
        }
        else{
            console.log("Song Name = Despacito");
            document.getElementById("hmmsong").innerHTML = "Song Name = Despacito";
        }
    }

    if(scorerightWrist > 0.1){
        circle(rightWrist_x,rightWrist_y,20);
        despacito.stop();
        if(danceStatus == false){
            dance.play();
        }
        else{
            console.log("Song Name = Dance Monkey");
            document.getElementById("hmmsong").innerHTML = "Song Name = Dance Monkey";
        }
    }
}

function modelLoaded(){
    console.log("Pose Net is loaded!!");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
