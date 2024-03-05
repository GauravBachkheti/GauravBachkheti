sec=1;
min=0
stopTimer=false
startTimer=false
able=true



document.getElementById('btn1').addEventListener("click",()=>{
    if(able==true){
        start()
        able=false
    }
    startTimer=true
})


document.getElementById('btn2').addEventListener("click",()=>{
    stopBt()
})


document.getElementById('btn3').addEventListener("click",()=>{
    reset()
})


start=()=>{
        interval= setInterval(funcStart, 1000);
    }
funcStart=startF=()=>{
    if(sec<10){
        document.querySelector('.sec').innerText=`0${sec}`
        sec=sec+1;
    }
    else if(sec>=10&&sec<60){
        document.querySelector('.sec').innerText=sec
        sec=sec+1;
    }
    else if(sec=60){
        sec=0
    document.querySelector('.sec').innerText=sec
    min=min+1;
    if(min<10){
        document.querySelector('.min').innerText=`0${min}`
    }
    else if(min>=10&&min<60){
        document.querySelector('.min').innerText=min
    }
    sec=sec+1;
}
}


reset=()=>{
    min=0
    sec=1
    clearInterval(interval)
    document.querySelector('.sec').innerText=`00`
    document.querySelector('.min').innerText=`00`
    document.getElementById('btn2').innerText='stop'
    stopTimer=false
startTimer=false
able=true
}

stop=()=>{
    clearInterval(interval)
}



stopBt=()=>{
    if(stopTimer==false&&startTimer==true){
        stop()
        document.getElementById('btn2').innerText='resume'
        stopTimer=true
       }
       else if(stopTimer==true&&startTimer==true){
        start()
        document.getElementById('btn2').innerText='stop'
        stopTimer=false
       }
}