plus=document.getElementById("+");
seven=document.getElementById("7");
clear=document.getElementById("c");

plus.addEventListener("click" , huww);

function huww(){
    ans.innerHTML+= "+"
}

seven.addEventListener("click" , huw);

function huw(){
    ans.innerHTML+=7
}

clear.addEventListener("click" , hu);

function hu(){
    ans.innerHTML=""
}



