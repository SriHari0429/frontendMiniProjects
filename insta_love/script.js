var con=document.querySelector(".pic-container")
var love=document.querySelector(".heart")

document.addEventListener("dblclick",function(){
love.style.transform= "translate(-50%,-50%) scale(1)"
love.style.opacity=0.8;
setTimeout(function(){
    love.style.opacity=0;
},1000)
setTimeout(function(){
    love.style.transform= "translate(-50%,-50%) scale(0)"
},2000)
})