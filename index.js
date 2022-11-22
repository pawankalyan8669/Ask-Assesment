let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const time_El = document.getElementById("time")
const start_Btn = document.getElementById('start');
const stop_Btn = document.getElementById("stop");
const reset_Btn = document.getElementById("reset");

const chr = document.getElementById("chr")
const num = document.getElementById("num")

let seconds = 0;
let interval = null;


function timer() {             // Timer function
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs <= 26) {
        chr.textContent = alpha[secs - 1].repeat(secs)      // charcters
    } else {
        chr.textContent = "Alphabets Completed!!"
    }

    if (secs % 2 === 0) {                                   // numbers
        num.textContent = ((secs) * 10) / 2
    } else {
        num.textContent = ''
    }

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_El.innerText = `${hrs}:${mins}:${secs}`;

}

function start() {              // Start Button function
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

start_Btn.addEventListener('click', start);  // Event listener

function stop() {                           // Stop Button function
    clearInterval(interval);
    interval = null;
}

stop_Btn.addEventListener("click", stop);  // Event listener

function reset() {                         // Reset Button function
    stop();
    seconds = 0;
    time_El.innerText = '00:00:00';
    chr.textContent = ''
    num.textContent = ''
}

reset_Btn.addEventListener("click", reset);  // Event listener