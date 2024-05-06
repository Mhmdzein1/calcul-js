const buttonIds = [
                  "+", "7", "4", "1", "0", "-", "8", "5", "2", 
                  "x", "9", "6", "3", ".", "c", "equal", "/"
                   ];
  
  buttonIds.forEach(function(id) {
    const button = document.getElementById(id);
    button.addEventListener("click", function() {
      cases(id);
    });
  });
  
  function cases(value) {
    
    if (value === "c") {
      ans.innerHTML = " ";
    }
    else if (value === "/") {
        if(    ans.innerHTML===" "){
            return;
        }
        ans.innerHTML+="/"
      }
      else if (value === "+") {
        if(    ans.innerHTML===" "){
            return;
        }
        ans.innerHTML+="+"
      }
      else if (value === "-") {
        if(    ans.innerHTML===" "){
            return;
        }
        ans.innerHTML+="-"
      }
      else if (value === "x") {
        if(    ans.innerHTML===" "){
            return;
        }
        ans.innerHTML+="*"
      }
     else if (value === "equal") {
      ans.innerHTML = eval(ans.innerHTML);
    } else {
      ans.innerHTML += value;
    }
  }