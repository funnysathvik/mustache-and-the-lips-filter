noxe="";
noye="";
function preload(){
mus = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
lips = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose',posne);
}

function draw(){
    image(video,300,300,300,300);
    image(mus,noxe,noye,10,10);
}

function modelloaded(){
    console.log("load");
}

function posne(results){
    if(results.length >0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
        noxe = results[0].pose.nose.x;
        noye = results[0].pose.nose.y;
        moutx = results[0].pose.nose.x;
        mouty = results[0].pose.nose.y-15;
    }

}