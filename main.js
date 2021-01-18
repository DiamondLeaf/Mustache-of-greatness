noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/y8xHsZPy/mustache.png');
  }


function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-45;
  }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 100, 100);
  }

function take_snapshot(){    
  save('virus.exe');
}
