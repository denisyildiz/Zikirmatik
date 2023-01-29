let number = document.querySelector(".sayialan>.number")
let numberButton = document.querySelector("#numberButton").addEventListener("click",fNumber);
let resetButton = document.querySelector("#resetButton").addEventListener("click",fReset);
function fNumber(){
number.innerHTML++;
};
function fReset(){
number.innerHTML=0;
};