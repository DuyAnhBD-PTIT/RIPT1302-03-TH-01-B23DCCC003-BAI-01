let totalSeconds = 0;
let intervalId;

function pad(val){
    return val < 10 ?  "0" + val : val;
} 

function setClock(){
    totalSeconds ++;
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds%3600) / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('hours').innerHTML = pad(hours);
    document.getElementById('minutes').innerHTML = pad(minutes);
    document.getElementById('seconds').innerHTML = pad(seconds);
}

function startClock(){
    if (!intervalId){
        intervalId = setInterval(setClock,1000);
    }
}

function stopClock(){
    clearInterval(intervalId);
    intervalId = null;
}

function resetClock() {
    totalSeconds = 0;
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    stopClock();
}