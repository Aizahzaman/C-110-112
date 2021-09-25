Webcam.set({
    width:350,
    height:350,
    imamge_format:"png",
    png_quality:100,
    constrains:{facingMode:"environment"}
});
Webcam.attach("#camera");

function take_picture(){
Webcam.snap(function(url){
    document.getElementById("picture").innerHTML='<img id="photo" src="'+url+'"/>';
});
}

console.log(ml5.version);

mymodel=ml5.imageClassifier("MobileNet",model);
function model(){
    console.log("Your Model Is Ready To Use");
}
function identify_picture(){
    item=document.getElementById("photo");
    mymodel.classify(item,result);
}
function result(error, answer){
    if(error){
        console.error(error);
    }
    if(answer){
        console.log(answer);
        document.getElementById("result").innerHTML="I think it is a/an "+answer[0].label;
    }
}