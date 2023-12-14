const increaseCount=document.getElementById("increase-btn");
const decreaseCount=document.getElementById("decrease-btn");
const resetCount=document.getElementById("reset-btn");
const counterBoard = document.getElementById("counter-board");
let count=0;

const increaseValue=()=>{
    counterBoard.innerHTML=++count;
    counterBoard.style.color = 'green';
}
const decreaseValue=()=>{
    counterBoard.innerHTML=--count;
    counterBoard.style.color = 'red';
}
const resetValue=()=>{
    counterBoard.innerHTML=0;
    count=0;
    counterBoard.style.color = 'black';
}
increaseCount.addEventListener('click',increaseValue);
decreaseCount.addEventListener('click',decreaseValue);
resetCount.addEventListener('click',resetValue);
