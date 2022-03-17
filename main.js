rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

song = "";

function preload()
{

song = loadSound("music.mp3");
}

function setup() 
{

    canvas = createCanvas(600,500);
    canvas.center();

  video= createCapture(VIDEO);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotposes);
}

function modelLoaded() {

    console.log("Model worked");
}

function gotposes(result) {

    if(result.length>0){
     console.log(result);
     rightWristX=result[0].pose.rightWrist.x;
     rightWristY=result[0].pose.rightWrist.y;

     leftWristX=result[0].pose.leftWrist.x;
     leftWristY=result[0].pose.leftWrist.y;
    }
}

function draw() {

    image(video,0,0,600,500);
}

function play() {

    song.play();
    song.setVolume(1);
    song.rate(1);
}