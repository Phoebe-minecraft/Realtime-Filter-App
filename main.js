var noseX =0
var noseY =0
var clownnose;
function preload(){
    clownnose = loadImage("ClownNose.png")
}

function modelLoaded(){
    console.log("poseNetis intialised")
    
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

    
}

function gotPoses(results){
    if(results.length > 0){
     
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
       
        
    }
   
}




function draw(){
    image(video,0,0,400,300);
    image (clownnose,noseX-20,noseY-20,50,50)


  
}
function snapsh0t(){
    save("images.jpg")
}