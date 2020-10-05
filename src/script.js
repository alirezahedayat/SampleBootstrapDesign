var colors=[
    "#60d394",
    "#d36060" ,
    "#c060d3",
    "#d3d160",
    "#8860d3",
    "#99e4da"

];
var sound=document.querySelectorAll(".sound");
var pads=document.querySelectorAll(".pads div");
var visual=document.querySelector(".visual");

window.addEventListener("load",()=>{
    
    
    console.log(sound);



pads.forEach((pad,index) => {
    pad.addEventListener("click",function(){
        sound[index].currentTime=0;
         sound[index].play();


         createBubbles(index);
     
    });
});

const createBubbles= index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation="jump is ease";
    bubble.addEventListener('animationend',function(){
        alert('mm')
        visual.removeChild()
    })
}



})