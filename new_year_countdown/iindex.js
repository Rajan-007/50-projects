const DayEL = document.getElementsById("days");
const HourEl = document.getElementsById("hours");
const MinEl = document.getElementsById("minutes");
const SecEl = document.getElementsById("seconds");

const NewYeartime = new Date("Jan 1,2024 00:00:00").getTime()

function updatecdn(){
    const now = new Date().getTime();
    const gap = NewYeartime-now
    const sec=1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const d = math.floor(gap/day);
    const HOUR = math.floor((gap % day)/hour) ;
    const MIN = math.floor((gap % hour)/min);
    const SEC = math.floor((gap % min)/sec);

    DayEL.innerText = d;
}