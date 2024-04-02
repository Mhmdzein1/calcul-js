plus=document.getElementById("+");
seven=document.getElementById("7");
clear=document.getElementById("c");

plus.addEventListener("click" , add);

function add(){
    ans.innerHTML+= "+"
}

seven.addEventListener("click" , sev);

function sev(){
    ans.innerHTML+=7
}

clear.addEventListener("click" , clr);

function clr(){
    ans.innerHTML=""
}




