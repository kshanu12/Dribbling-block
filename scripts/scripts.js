let win=document.getElementById("win");
let died=document.getElementById("died");
let character=document.getElementById("character");
let block=document.getElementById("block");
let restart=document.getElementById("restart");
let score=document.getElementById("score");
let highscore=document.getElementById("hscr");
// let celebration=document.getElementById("celebration");
// let gameover=document.getElementById("game_over");
// let highscore_gif=document.getElementById("high_score");
var i=3,scr=0,hscr=0,j=.5;

function playAudio() { 
    win.play(); 
}

function playDieAudio() { 
    died.play(); 
}

if(JSON.parse(localStorage.getItem("high_score")))
{
    hscr=JSON.parse(localStorage.getItem("high_score"));
    highscore.textContent="High Score: "+hscr;
    console.log(JSON.parse(localStorage.getItem("high_score")));
}

setTimeout(function(){
    block.classList.add("anime");
},1000)

function jump(){
    if(character.classList!="animte"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },400)
}

let check=setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<70&&blockLeft>=50&&characterTop>=124)
    {
        block.style.animation="none";
        block.style.display="none";
        restart.classList.remove("dis-none");
        if(hscr<=scr){
            highscore.textContent="High Score:"+scr.toFixed(2);
            localStorage.setItem("high_score", JSON.stringify(scr.toFixed(2)));
            console.log("inside if",JSON.parse(localStorage.getItem("high_score")));
            playAudio();
            // celebration.classList.remove("dis-none")
            // highscore_gif.classList.remove("dis-none")
            setTimeout(() => {
                alert("New High-Score!!");
            }, 100); 
        }
        else{
            // gameover.classList.remove("dis-none")
            playDieAudio();
        }
    }
},10)

function myFunction(){
    location.reload();
}

setInterval(function(){
    block.style.animationDuration = i+"s";
    i=i-0.0005;
    scr+=0.1;
    if(restart.classList=="dis-none"){
        score.textContent="Score:"+scr.toFixed(2);
    }
},30)
