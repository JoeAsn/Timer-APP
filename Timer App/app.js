const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const time = document.querySelector("div");
const start = document.querySelector(".start") ;
const cont = document.querySelector(".continue")

let seconds = 0 ;
let mins = 0 ;
let hrs = 0 ;
function forTimer(e){
    seconds++ ;
    if (seconds / 60 === 1){
        seconds = 0 ;
        mins++
        if (mins / 60 === 1){
            mins = 0 ;
            hrs++
        }
    }
    time.innerText = `${String(hrs).padStart(2,0)}:${String(mins).padStart(2,0)}:${String(seconds).padStart(2,0)}`
}
function reseter(){
        seconds = 0 ;
        mins = 0 ;
        hrs = 0 ;
        time.innerText = `${String(hrs).padStart(2,0)}:${String(mins).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
        console.log(time)
        stop.style.display = "none" ;
        cont.style.display = "none" ;
        reset.style.display = "none" ;
        start.style.display = "inline"
}
let status = "stopped";
let timer;

function startTimer(e){
    let target = e.target ;
    function end(){
         let timerEnd = clearInterval(timer)
         console.log(status)
}   

    if(status === "stopped"){
        timer = setInterval(forTimer , 1000);
        stop.style.display = "inline"
        status =  "started"
        start.style.display = "none" ;
        cont.style.display = "none"
    }
    else{
        end();
        status = "stopped"
        cont.style.display = "inline" ;
        reset.style.display = "inline" ;
        stop.style.display = 'none'


    }
}

let starter  = start.addEventListener("click" , startTimer);
stop.addEventListener("click" ,startTimer);
cont.addEventListener("click",startTimer )
reset.addEventListener("click" ,reseter )
