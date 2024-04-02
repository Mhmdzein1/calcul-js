plus=document.getElementById("+");
seven=document.getElementById("7");
four=document.getElementById("4");
one=document.getElementById("1");
zero=document.getElementById("0");
minus=document.getElementById("-");
eight=document.getElementById("8");
fi=document.getElementById("5");
two=document.getElementById("2");
timez=document.getElementById("x");
nine=document.getElementById("9");
six=document.getElementById("6");
three=document.getElementById("3");
point=document.getElementById(".");
clear=document.getElementById("c");
eql=document.getElementById("equal");
divide=document.getElementById("/");


plus.addEventListener("click" , add);

function add(){
    ans.innerHTML+= "+"
}

seven.addEventListener("click" , sev);

function sev(){
    ans.innerHTML+=7
}


six.addEventListener("click" , sx);

function sx(){
    ans.innerHTML+=6
}
three.addEventListener("click" , thri);

function thri(){
    ans.innerHTML+=3
}

point.addEventListener("click" , pnt);

function pnt(){
    ans.innerHTML+="."
}

divide.addEventListener("click" , div);

function div(){
    ans.innerHTML+=7
}

four.addEventListener("click" , fore);

function fore(){
    ans.innerHTML+=4
}

one.addEventListener("click" , won);

function won(){
    ans.innerHTML+=1
}

zero.addEventListener("click" , ziro);

function ziro(){
    ans.innerHTML+=0
}

minus.addEventListener("click" , substract);

function substract(){
    ans.innerHTML+= "-"
}

eight.addEventListener("click" , ait);

function ait(){
    ans.innerHTML+=8
}

fi.addEventListener("click" , fiv);

function fiv(){
    ans.innerHTML+=5
}

two.addEventListener("click" , too);

function too(){
    ans.innerHTML+=2
}

timez.addEventListener("click" , multiply);

function multiply(){
    ans.innerHTML+=x
}

nine.addEventListener("click" , nin);

function nin(){
    ans.innerHTML+=9
}




clear.addEventListener("click" , clr);

function clr(){
    ans.innerHTML=""
}

eql.addEventListener("click" , calculate);

function calculate(){
    ans.innerHTML=eval( ans.innerHTML);
}




