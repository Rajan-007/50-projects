const hrEl=document.getElementById("hrs");
const minEl=document.getElementById("mins");
const secEl=document.getElementById("sec");
const ampmEl=document.getElementById("ampm");

function clock(){
    let hr= new Date().getHours();
    let min= new Date().getMinutes();
    let sec= new Date().getSeconds();
    let ampm= "PM"
        if (hr > 12){
            hr= hr - 12;
            ampm = "AM";
        }
    hr=hr<10 ?"0"+hr:hr;
    min=min<10 ?"0"+min:min;
    sec=sec<10 ?"0"+sec:sec;


    hrEl.innerHTML=hr;
    minEl.innerHTML=min;
    secEl.innerHTML=sec;
    ampmEl.innerHTML=ampm;
    setTimeout(()=>{
        clock()
    },1000)
}

clock();