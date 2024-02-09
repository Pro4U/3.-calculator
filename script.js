let inp = document.querySelector("input");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(item){
    
    item.addEventListener("click",function(){
        
        btnText = item.innerHTML;

        if (btnText === "AC"){
            inp.value = "";
        }
        else if(btnText === "="){
            try{
                inp.value = eval(inp.value);
            }
            catch(e){
                alert("please enter correct input")
                inp.value = "";
            }
        }
        else{
            inp.value += btnText;
        }
        
    })
})