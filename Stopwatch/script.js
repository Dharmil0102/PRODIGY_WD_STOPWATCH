// script.js
let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3,'0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
        
    } else {
        timer = setInterval(() => {
            elapsedTime += 10;
            updateDisplay();
        }, 10);
        startStopButton.textContent = 'Stop';
        document.getElementById("startStop").style.backgroundColor="Red";
        document.getElementById("startStop").style.color="white";
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
    running = false;
    lapsList.innerHTML = '';
}

function addLap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        lapsList.appendChild(lapTime);
    }
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', addLap);

updateDisplay();
