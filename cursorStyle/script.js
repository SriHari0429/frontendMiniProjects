var a=document.querySelector("body")
var b=document.querySelector(".cursor")

document.addEventListener("mousemove",function(dets){
    b.style.left=dets.x +"px";
    b.style.top=dets.y +"px";
})