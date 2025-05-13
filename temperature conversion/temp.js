const textbox1 = document.getElementById("textbox")
const tofahrenheit1 = document.getElementById("tofahrenheit")
const tocelsius1 =document.getElementById("tocelsius")
const finalvalue1 = document.getElementById("finalvalue")
const deleted1 = document.getElementById("deleted")
let temp;
let initial = 0;

function convert(){

    if(tofahrenheit1.checked){
        temp = Number(textbox1.value);
        temp = temp * 9 / 5 + 32 ;
        finalvalue1.textContent = temp + "°f";
    }
    else if(tocelsius1.checked){
        temp = Number(textbox1.value);
        temp = (5 / 9) * (temp - 32) ;
        finalvalue1.textContent = temp + "°c";
         }
     else{
        finalvalue1.textContent = "enter a unit value";

     }    

}
deleted1.onclick = function(){
    initial = 0;
    finalvalue1.textContent = initial;
    textbox1.value = initial;
    tofahrenheit1.checked = false;
    tocelsius1.checked = false;
}