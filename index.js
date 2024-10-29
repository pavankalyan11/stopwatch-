window.onload = function () {
    let display = document.getElementById('display');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let resetBtn = document.getElementById('resetBtn');
    
    let timer;
    let isRunning = false;
    let hours = 0, minutes = 0, seconds = 0;

    // Function to update the display
    function updateDisplay() {
        let h = hours < 10 ? '0' + hours : hours;
        let m = minutes < 10 ? '0' + minutes : minutes;
        let s = seconds < 10 ? '0' + seconds : seconds;
        display.innerHTML = `${h}:${m}:${s}`;
    }

    // Function to increment time
    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }

    // Start button event
    startBtn.onclick = function () {
        if (!isRunning) {
            startTimer();
            isRunning = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;
            resetBtn.disabled = false;
        }
    };

    // Stop button event
    stopBtn.onclick = function () {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
    };

    // Reset button event
    resetBtn.onclick = function () {
        clearInterval(timer);
        isRunning = false;
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateDisplay();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = true;
    };
};
