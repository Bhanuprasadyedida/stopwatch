// script.js
const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelectorAll('.buttons button')[1];
const stopButton = document.querySelectorAll('.buttons button')[0];
const resetButton = document.querySelectorAll('.buttons button')[2];

let startTime, updatedTime, difference, tInterval;
let savedTime = 0;
let running = false;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateTimer, 1);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        savedTime = difference;
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval); // Clear any existing timer interval
    savedTime = 0; // Reset savedTime to 0
    running = false; // Set timer state to not running
    timerDisplay.innerHTML = "00:00:00:000"; // Reset the display
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 1);

    timerDisplay.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
