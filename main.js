function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tgENfBY1h/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);      
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML='I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Acccuracy-'+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img=document.getElementById('dog');
        img1=document.getElementById('lion');
        img2=document.getElementById('cat');
        img3=document.getElementById('cow');
        if(results[0].label=="dog"){
            document.getElementById("pic").innerHTML=img;
        }else if(results[0].label=="Bell"){
            document.getElementById("pic").innerHTML=img1;
        }else if(results[0].label=="Snapping"){
            document.getElementById("pic").innerHTML=img2;
        }else 
        document.getElementById("pic").innerHTML=img3;
       
    }
}

