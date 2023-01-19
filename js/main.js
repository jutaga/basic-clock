"use strict";
const hourEl = document.getElementById('hour');
const minuteE1 = document.getElementById('minutes');
const secondE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');
const updateClock = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM";
    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hourEl.innerHTML = hour;
    minuteE1.innerHTML = minutes;
    secondE1.innerHTML = seconds;
    ampmE1.innerHTML = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
};
updateClock();
//# sourceMappingURL=main.js.map