prediction_1 = "";
prediction_2 = "";

Webcam.set({
  width: 350,
  height: 300,
  image_format: 'jpeg',
  jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id="image19" src="'+data_uri+'">';
    });

}
 
 
console.log('ml5 version',ml5.version);

classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GDg-mWw3K/model.json",modelloaded)

function modelloaded(){
  console.log("model loaded succesfully")
}
function check(){
  img = document.getElementById("image19")
  classifier.classify(img,gotresult)
}

function gotresult(error,result){
  if(error){
    console.log(error)
  }
  else{
    console.log(result)
  }

}