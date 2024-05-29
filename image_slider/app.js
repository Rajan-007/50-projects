let container = document.querySelector('.container')
let btns = document.querySelectorAll('.btn')
let imgList = ['concert','workshop']
console.log(imgList.length);

let index = 0 ;

btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            if(index<=0){
                index = imgList.length
            }
            index--;
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`

        }
        else{
            index++;
            if(index === imgList.length){
                index = 0
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})