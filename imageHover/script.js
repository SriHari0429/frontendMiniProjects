
var elem1=document.querySelectorAll(".elem")

elem1.forEach(function(val){

val.addEventListener("mouseenter",()=>{
    val.childNodes[3].style.opacity=1;
})
val.addEventListener("mouseleave",()=>{
    val.childNodes[3].style.opacity=0;
})
val.addEventListener("mousemove",(dets)=>{
    val.childNodes[3].style.left=dets.x +"px"
    val.childNodes[3].style.top=dets.y +"px"
})

})































// elem1.addEventListener("mousemove",function(dets){
//     img.style.left=dets.x+"px";
//     img.style.opacity=1;
//      img.style.top=dets.y+"px";
// })
// elem1.addEventListener("mouseenter",function(dets){
//     img.style.opacity=1;
// })
// elem1.addEventListener("mouseleave",function(dets){
//     img.style.opacity=0
//     ;
// })