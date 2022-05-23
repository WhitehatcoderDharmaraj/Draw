    x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function draws(){
    document.getElementById("status").innerHTML="System is listening, please speak";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The speech has been recognized as"+ content;
    if(content=="circle"){
        x=Math.floor(Math.ramdom()*900);
        y=Math.floor(Math.ramdom()*600);
        document.getElementById("status").innerHTML="Started Drawing circle";
        draw_circle="set";
    }

    if(content=="rectangle"){
        x=Math.floor(Math.ramdom()*900);
        y=Math.floor(Math.ramdom()*600);
        document.getElementById("status").innerHTML="Started Drawing rectangle";
        draw_rect="set";
    }
}

function setup(){
    canvas=createCanvas(900,600);
}