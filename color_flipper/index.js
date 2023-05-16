wrap = document.getElementById("wrap");
color = document.getElementById("color");
btn = document.getElementById("btn");
hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
heading = document.getElementById("heading");

btn.addEventListener('click',changeBg);
function changeBg(){
    hexC = '#'
    for(i=1;i<=6;i++){
        hexC += randHexValue()
    }

    wrap.style.backgroundColor = hexC;
    color.innerHTML = hexC ;
    heading.style.color=hexC;
}

function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
 }
