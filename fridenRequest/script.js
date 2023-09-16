var add=document.querySelector("button")
var change=document.querySelector("h5")
var shift=0

document.addEventListener("click",function(){
    if(shift==0){
        add.innerHTML="Requested";
        change.innerHTML="Request sent";
        change.style.color="green"
        add.style.backgroundColor="lightblue"
        shift=1;
    }else{
        add.innerHTML="Add friend";
        change.innerHTML="Stranger";
        change.style.color="red"
        add.style.backgroundColor="lightgreen"
        shift=0;
    }
})