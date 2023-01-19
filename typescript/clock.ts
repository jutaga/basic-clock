const hourEl: any = document.getElementById('hour');
const minuteE1: any = document.getElementById('minutes');
const secondE1: any = document.getElementById('seconds');
const ampmE1: any = document.getElementById('ampm');


const updateClock = () => {
    let hour: string | number = new Date().getHours();
    let minutes: string | number = new Date().getMinutes();
    let seconds: string | number = new Date().getSeconds();
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
}

updateClock();