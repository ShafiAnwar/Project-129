
song1="";
song2="";
rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
scoreleftWrist=0;
scorerightWrist=0;
song1_status="";
song2_status="";
function preload(){
    song1=loadSound("Believer.mp3");
    song2=loadSound("Heat Waves.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
function draw(){
image(video,0,0,600,500);
song1_status=song1.isPlaying();
song2_statu=song2.isPlaying();
fill("red");
stroke("white");
if(scoreleftWrist> 0.2){
    circle(leftWristX, leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume:"+volume;
    song.setVolume(volume);
}

if(scoreleftWrist>0.2){
    circle(leftWristX,leftWristY,20);
    song1.stop();

    if(song2_status==false){
        song2.play();
    document.getElementById("btn1").innerHTML="Playing the song of"+song1
    }
}
}
function play(){
 
}
function modelLoaded(){
    console.log("Posenet Loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
    }
}
