
function Displaytime(){
    let hr = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
   
    if(hr>12){
        hr = hr - 12 ;
        ampm.innerHTML = "PM"
    }


    document.getElementById("hours").innerHTML = Zero(hr) ;
    document.getElementById("mins").innerHTML = Zero(min) ;
    document.getElementById("seconds").innerHTML = Zero(sec) ;
    

}

function Zero(num){
    return num<10?"0"+num:num;
}

setInterval(Displaytime ,500)