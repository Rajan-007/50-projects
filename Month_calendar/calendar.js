const MonEl = document.querySelector(".date h1")
const FulldateEl = document.querySelector(".date p")
const daysEl = document.querySelector(".days");
const monthInx = new Date().getMonth();
const lastday = new Date(new Date().getFullYear(),monthInx + 1 ,0 ).getDate();
const Firstday = new Date(new Date().getFullYear(),monthInx , 1 ).getDay() - 1;
console.log(Firstday)
const month = [
    "January","February","March","April","May","June",
    "July","August","September","october","November","December"
];

MonEl.innerHTML = (month[monthInx]);
FulldateEl.innerHTML = new Date().toDateString();

let DAYS = " ";


for (let i= Firstday ; i > 0; i--) {
    DAYS += `<div class="empty"> </div> `;
}
for (let i = 1; i <= lastday ; i++ ) {
    if((i === new Date().getDate())) {
        DAYS += `<div class="today">${i}</div> `;
    } else{
    DAYS += `<div>${i}</div> `;
    }
}

daysEl.innerHTML = DAYS;
