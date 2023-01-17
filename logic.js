var screen=document.getElementById("screen");
var buttons=document.querySelectorAll("button");
var screenValue=' ';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        var buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue=' ';
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}







