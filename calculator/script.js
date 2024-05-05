plus=document.getElementById("+");
seven=document.getElementById("7");
four=document.getElementById("4");
one=document.getElementById("1");
zero=document.getElementById("0");
minus=document.getElementById("-");
eight=document.getElementById("8");
five=document.getElementById("5");
two=document.getElementById("2");
timez=document.getElementById("x");
nine=document.getElementById("9");
six=document.getElementById("6");
three=document.getElementById("3");
point=document.getElementById(".");
clear=document.getElementById("c");
equal=document.getElementById("equal");
divide=document.getElementById("/");






plus.addEventListener("click" , add);

function add(){
    if(    ans.innerHTML===" "){
        return;
    }
    ans.innerHTML+= "+"
}

seven.addEventListener("click" , numSeven);

function numSeven(){
    ans.innerHTML+=7
}


six.addEventListener("click" , numSix);

function numSix(){
    ans.innerHTML+=6
}
three.addEventListener("click" , numThree);

function numThree(){
    ans.innerHTML+=3
}

point.addEventListener("click" , dot);

function dot(){
    ans.innerHTML+="."
}

divide.addEventListener("click" , division);

function division(){
    if(    ans.innerHTML===" "){
        return;
    }
    ans.innerHTML+="/"
}

four.addEventListener("click" , numfour);

function numfour(){
    ans.innerHTML+=4
}

one.addEventListener("click" , numOne);

function numOne(){
    ans.innerHTML+=1
}

zero.addEventListener("click" , ziro);

function ziro(){
    ans.innerHTML+=0
}

minus.addEventListener("click" , substract);

function substract(){
    if(    ans.innerHTML===" "){
        return;
    }
    ans.innerHTML+= "-"
}

eight.addEventListener("click" , numEight);

function numEight(){
    ans.innerHTML+=8
}

five.addEventListener("click" , numFive);

function numFive(){
    ans.innerHTML+=5
}

two.addEventListener("click" , numTwo);

function numTwo(){
    ans.innerHTML+=2
}

timez.addEventListener("click" , multiply);

function multiply(){
    if(    ans.innerHTML===" "){
        return;
    }
    ans.innerHTML+="*"
}

nine.addEventListener("click" , numNine);

function numNine(){
    ans.innerHTML+=9
}

clear.addEventListener("click" , clearOutput);

function clearOutput(){
    ans.innerHTML=" ";
}

equal.addEventListener("click" , calculate);

function calculate(){
    ans.innerHTML=eval( ans.innerHTML);
}




