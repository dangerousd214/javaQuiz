const start = document.querySelector(".start button");
const container = document.querySelector(".container");
const clock = document.querySelector(".clock");
const exit = document.querySelector(" .exit")

start.onclick = ()=>{
    container.classList.add("active");
    clock.classList.add("active"); 
    countdown;
}

exit.onclick = function () {
    container.classList.remove("active");
    clock.classList.remove("active");
}
 function countdown() {
     var timeLeft = 15;

     var clock = setInterval(function() {
         if(timeLeft <= 0) {
             clearInterval(clock);
             document.getElementsByClassName('clock').innerHTML = timeLeft;
         } else {
             document.getElementsByClassName('clock').innerHTML = timeLeft;
         }
         timeLeft -= 1;
    }, 1000);
 }

 

